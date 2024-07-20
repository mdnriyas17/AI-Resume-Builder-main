import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const Template1 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor
            ? resumeInfo?.themeColor
            : "black",
        }}
      />

      {resumeInfo?.education?.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
};

const Template2 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <section className="px-6 border-b border-gray-300">
      <h3 className="text-xl font-semibold">Education</h3>
      {resumeInfo?.education.map((edu) => (
        <div key={edu.id} className="p-2 bg-gray-50 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">
            {edu.degree} in {edu.major}
          </h4>
          <p className="text-gray-600 text-sm">{edu.universityName}</p>
          <p className="text-gray-500 text-xs">
            {edu.startDate} - {edu.endDate}
          </p>
          <p className=" text-gray-700 text-sm">{edu.description}</p>
        </div>
      ))}
    </section>
  );
};
const Template3 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <section className="mb-1">
      <h2 className="text-2xl font-bold">Education</h2>
      {resumeInfo?.education?.map((edu) => (
        <div key={edu.id} className="mb-1">
          <h3 className="text-xl font-semibold">{edu.universityName}</h3>
          <p className="italic">
            {edu.degree} in {edu.major}
          </p>
          <p>
            {edu.startDate} - {edu.endDate}
          </p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

function EducationalPreview({ resumeInfo }) {
  return (
    <div>
      {resumeInfo?.resumeId == "resume-1" ? (
        <Template1 />
      ) : resumeInfo?.resumeId == "resume-2" ? (
        <Template2 />
      ) : (
        <Template3 />
      )}
    </div>
  );
}

export default EducationalPreview;
