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
  if (!experience) return null;
  return (
    <div className="single-section-container">
      <div className="section-title">Experience</div>
      {experience.map((experienceItem) => (
        <ExperienceItem
          key={experienceItem.id}
          name={experienceItem.name}
          start={experienceItem.start}
          stop={experienceItem.stop}
          role={experienceItem.role}
          description={experienceItem.description}
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
