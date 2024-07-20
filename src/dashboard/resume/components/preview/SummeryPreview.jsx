import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const Template2 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div>
      <section className="px-6 border-b border-gray-300">
        <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
        <p className="text-gray-800 text-sm">{resumeInfo?.summery}</p>
      </section>
    </div>
  );
};

const Template1 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div>
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      >
        Summery
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor
            ? resumeInfo?.themeColor
            : "black",
        }}
      />
      <p className="text-xs">{resumeInfo?.summery}</p>
    </div>
  );
};

const Template3 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <section className="mb-1">
      <h2 className="text-2xl font-bold">Summary</h2>
      <p>{resumeInfo?.summery}</p>
    </section>
  );
};
function SummeryPreview({ resumeInfo }) {
  return (
    <>
      {resumeInfo?.resumeId === "resume-1" ? (
        <Template1 />
      ) : resumeInfo?.resumeId === "resume-2" ? (
        <Template2 />
      ) : (
        <Template3 />
      )}
    </>
  );
}

export default SummeryPreview;
