import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { RWebShare } from 'react-web-share';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import ResumePreview from '@/dashboard/resume/components/ResumePreview';
import "../view/LoadingSpinner.css"
function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resumeId } = useParams();

  useEffect(() => {
    const GetResumeInfo = async () => {
      try {
        const resp = await GlobalApi.GetResumeById(resumeId);
        setResumeInfo(resp.data.data);
      } catch (err) {
        setError('Failed to fetch resume information');
      } finally {
        setLoading(false);
      }
    };
    GetResumeInfo();
  }, [resumeId]);

  const HandleDownload = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generates Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share a unique
            resume URL with your friends and family.
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>
            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url: `${import.meta.env.VITE_APP_BASE_URL}/my-resume/${resumeId}/view`,
                title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
              }}
              onClick={() => console.log('shared successfully!')}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-5 mx-10 md:mx-10 lg:mx-18">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
