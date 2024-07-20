import React, { useContext } from "react";
import dummy from "@/data/dummy";
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
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor
            ? resumeInfo?.themeColor
            : "black",
        }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor ? resumeInfo?.themeColor : "black",
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName},{experience?.city},{experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking ? "Present" : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
};
const Template2 = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <section className="px-6 border-b border-gray-300">
      <h3 className="text-xl font-semibold">Experience</h3>
      {resumeInfo?.experience.map((exp) => (
        <div key={exp?.id} className=" p-2 bg-gray-50 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">
            {exp?.title} at {exp?.companyName}
          </h4>
          <p className="text-gray-600 text-sm">
            {exp?.city}, {exp?.state}
          </p>
          <p className="text-gray-500 text-xs">
            {exp?.startDate} - {exp?.endDate || "Present"}
          </p>
          <p className=" text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: exp?.workSummery }}></p>
        </div>
      ))}
    </section>
  );
};
const Template3 = () => {
    const { resumeInfo } = useContext(ResumeInfoContext);
    return (
        <section className="mb-1">
        <h2 className="text-2xl font-bold">Experience</h2>
        {resumeInfo?.experience?.map((job) => (
          <div key={job.id} className="mb-2">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="italic">{job.companyName} - {job.city}, {job.state}</p>
            <p>{job.startDate} - {job.currentlyWorking ? 'Present' : job.endDate}</p>
            <p dangerouslySetInnerHTML={{ __html: job.workSummery }}></p>
          </div>
        ))}
      </section>
    );
}
function ExperiencePreview({ resumeInfo }) {
  const data = {
    firstName: "James",
    lastName: "Carter",
    jobTitle: "Full Stack Developer",
    address: "525 N Tryon Street, NC 28117",
    phone: "(123)-456-7890",
    email: "example@gmail.com",
    themeColor: "#ff6666",
    summery:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    experience: [
      {
        id: 1,
        title: "Full Stack Developer",
        companyName: "Amazon",
        city: "New York",
        state: "NY",
        startDate: "Jan 2021",
        endDate: "",
        currentlyWorking: true,
        workSummery:
          "Designed, developed, and maintained full-stack applications using React and Node.js. Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers. Maintaining the React Native in-house organization application. Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.",
      },
      {
        id: 2,
        title: "Frontend Developer",
        companyName: "Google",
        city: "Charlotte",
        state: "NC",
        startDate: "May 2019",
        endDate: "Jan 2021",
        currentlyWorking: false,
        workSummery:
          "Designed, developed, and maintained front-end applications using React. Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers. Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.",
      },
    ],
    education: [
      {
        id: 1,
        universityName: "Western Illinois University",
        startDate: "Aug 2018",
        endDate: "Dec 2019",
        degree: "Master",
        major: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      },
      {
        id: 2,
        universityName: "Western Illinois University",
        startDate: "Aug 2018",
        endDate: "Dec 2019",
        degree: "Master",
        major: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Angular",
        rating: 80,
      },
      {
        id: 2,
        name: "React",
        rating: 100,
      },
      {
        id: 3,
        name: "MySql",
        rating: 80,
      },
      {
        id: 4,
        name: "React Native",
        rating: 100,
      },
    ],
  };
  // console.log("resumeInfo===========>",resumeInfo)
  return <div>
{
    <>{resumeInfo?.resumeId === "resume-1" ? <Template1 /> : resumeInfo?.resumeId === "resume-2" ? <Template2 /> : <Template3 />}</>
}
  </div>;
}

export default ExperiencePreview;
