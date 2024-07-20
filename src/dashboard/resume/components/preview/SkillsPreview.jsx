import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
const Template1 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      >
        SKills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor
            ? resumeInfo?.themeColor
            : "black",
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills?.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill?.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor
                    ? resumeInfo?.themeColor
                    : "black",
                  width: skill?.rating * 20 + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Template2 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <section className="px-6">
      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <ul>
        {resumeInfo?.skills.map((skill) => (
          <li key={skill.id} className="mb-2 flex items-center">
            <span className="font-semibold w-1/3 text-sm">{skill.name}</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${100 - skill.rating}%` }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600 text-sm">
              {100 - skill.rating}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
const Template3 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <section className="mb-1">
      <h2 className="text-2xl font-bold">Skills</h2>
      <ul className="list-disc list-inside">
        {resumeInfo?.skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} ({skill.rating}%)
          </li>
        ))}
      </ul>
    </section>
  );
};
function SkillsPreview({ resumeInfo }) {
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

export default SkillsPreview;
