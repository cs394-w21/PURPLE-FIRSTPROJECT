import React from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

/**
 * TODO: Figure out how get resume typed properly
 */
/* eslint-disable react/prop-types */
const ResumeView = (props) => {
  const { resume } = props;
  return (
    <div className="container">
      <BasicInfo
        name={resume.name}
        phone={resume.phone}
        email={resume.email}
        location={resume.location}
      />
      <div className="section-container">
        <Education education={resume.education} />
        <Experience experience={resume.experience} />
        <Skills skills={resume.skills} />
      </div>
    </div>
  );
};
/* eslint-enable react/prop-types */

export default ResumeView;
