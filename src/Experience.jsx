import React from "react";
import PropTypes from "prop-types";

const ExperienceItem = (props) => {
  const { name, start, stop, role, description } = props;
  return (
    <div className="item-container">
      <div className="item-name">{name}</div>
      <div className="item-text">
        {start}-{stop}
      </div>
      <div className="item-value">{role}</div>
      <div className="item-text">{description}</div>
    </div>
  );
};

const ExperienceItemProps = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ExperienceItem.propTypes = ExperienceItemProps;

const Experience = (props) => {
  const { experience } = props;
  return (
    <div className="single-section-container">
      <div className="section-title">Experience</div>
      {experience.map((educationItem) => (
        <ExperienceItem
          key={educationItem.name}
          name={educationItem.name}
          start={educationItem.start}
          stop={educationItem.stop}
          role={educationItem.role}
          description={educationItem.description}
        />
      ))}
    </div>
  );
};

export const ExperienceProps = {
  experience: PropTypes.arrayOf(PropTypes.shape(ExperienceItemProps).isRequired)
    .isRequired,
};

Experience.propTypes = ExperienceProps;

export default Experience;
