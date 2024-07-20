import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const Template1 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      {/* <hr className='border-[1.5px] my-2'
        style={{
            borderColor:resumeInfo?.themeColor
        }}
        /> */}
    </div>
  );
};
const Template2 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div>
      <header className="bg-gray-800 text-white text-center ">
        <h1
          className="text-3xl font-bold"
          style={{
            color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
          }}
        >
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <h2 className="text-xl font-semibold">{resumeInfo?.jobTitle}</h2>
      </header>

      {/* Profile */}
      <section className="px-6 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span>{" "}
              {resumeInfo?.address}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> {resumeInfo?.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {resumeInfo?.email}
            </p>
          </div>
          <div className="text-right mt-4 sm:mt-0">
            <a
              href={`mailto:${resumeInfo?.email}`}
              className="text-blue-500 hover:underline"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
const Template3 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <header className="flex justify-between items-center mb-1">
      <div>
        <h1 className="text-3xl font-bold">
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <p className="text-xl">{resumeInfo?.jobTitle}</p>
      </div>
      <div className="text-right">
        <p>{resumeInfo?.address}</p>
        <p>{resumeInfo?.phone}</p>
        <p>{resumeInfo?.email}</p>
      </div>
    </header>
  );
};
function PersonalDetailPreview({ resumeInfo }) {
  console.log("resumeInfo", resumeInfo);
  return (
    <>
      {resumeInfo?.resumeId == "resume-1" ? (
        <Template1 />
      ) : resumeInfo?.resumeId == "resume-2" ? (
        <Template2 />
      ) : (
        <Template3 />
      )}
    </>
  );
}

export default PersonalDetailPreview;
