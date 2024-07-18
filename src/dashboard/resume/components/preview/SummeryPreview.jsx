import React from "react";
import dummy from "@/data/dummy";
function SummeryPreview({ resumeInfo }) {
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
          borderColor: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
        }}
      />
      <p className="text-xs">{resumeInfo?.summery}</p>
    </div>
  );
}

export default SummeryPreview;
