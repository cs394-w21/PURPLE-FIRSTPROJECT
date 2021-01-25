import React from "react";
import PropTypes from "prop-types";

const EducationItem = (props) => {
  const { name, start, stop, degree, description } = props;
  return (
    <div className="item-container">
      <div className="item-name">{name}</div>
      <div className="item-text">
        {start}-{stop}
      </div>
      <div className="item-value">{degree}</div>
      <div className="item-text">{description}</div>
    </div>
  );
};

const EducationItemProps = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

EducationItem.propTypes = EducationItemProps;

const Education = (props) => {
  const { education } = props;
  return (
    <div className="single-section-container">
      <div className="section-title">Education</div>
      {education.map((educationItem) => (
        <EducationItem
          key={educationItem.name}
          name={educationItem.name}
          start={educationItem.start}
          stop={educationItem.stop}
          degree={educationItem.degree}
          description={educationItem.description}
        />
      ))}
    </div>
  );
};

export const EducationProps = {
  education: PropTypes.arrayOf(PropTypes.shape(EducationItemProps).isRequired)
    .isRequired,
};

Education.propTypes = EducationProps;

export default Education;
