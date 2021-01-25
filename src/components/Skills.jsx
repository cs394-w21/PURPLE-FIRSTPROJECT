import React from "react";
import PropTypes from "prop-types";

const SkillItem = (props) => {
  const { label, value } = props;
  return (
    <div className="item-container">
      <div className="item-name">{label}</div>
      <div className="item-text">{value}</div>
    </div>
  );
};

const SkillItemProps = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SkillItem.propTypes = SkillItemProps;

const Skills = (props) => {
  const { skills } = props;
  if (!skills) return null;
  return (
    <div className="single-section-container">
      <div className="section-title">Technical Skills</div>
      {skills.map((skillItem) => (
        <SkillItem
          key={skillItem.id}
          label={skillItem.label}
          value={skillItem.value}
        />
      ))}
    </div>
  );
};

export const SkillProps = {
  skills: PropTypes.arrayOf(PropTypes.shape(SkillItemProps).isRequired)
    .isRequired,
};

Skills.propTypes = SkillProps;

export default Skills;
