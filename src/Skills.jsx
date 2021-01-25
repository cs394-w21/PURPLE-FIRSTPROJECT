import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

// const text = {
//   color: "black",
//   fontSize: 20,
//   padding: 2,
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     borderWidth: 3,
//     borderColor: "black",
//     borderStyle: "solid",
//     margin: 8,
//     maxWidth: 310,
//   },
//   itemContainer: {
//     paddingTop: 16,
//   },
//   title: {
//     color: "black",
//     fontSize: 40,
//     paddingTop: 5,
//     paddingBottom: 5,
//   },
//   text,
//   name: {
//     ...text,
//     fontWeight: "bold",
//   },
// });

const SkillItem = (props) => {
  const { label, value } = props;
  return (
    <div>
      <p>{label}</p>
      <p>{value}</p>
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
  return (
    <div>
      <h2>Technical Skills</h2>
      {skills.map((skillItem) => (
        <SkillItem
          key={skillItem.label}
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
