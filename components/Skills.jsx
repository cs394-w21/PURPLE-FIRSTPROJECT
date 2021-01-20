import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const text = {
  color: "black",
  fontSize: 20,
  padding: "2px",
};

const styles = StyleSheet.create({
  container: {
    padding: "20px",
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    margin: "8px",
    maxWidth: "310px",
  },
  itemContainer: {
    paddingTop: "16px",
  },
  title: {
    color: "black",
    fontSize: 40,
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  text,
  name: {
    ...text,
    fontWeight: "bold",
  },
});

const SkillItem = (props) => {
  const { label, value } = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
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
    <View style={styles.container}>
      <Text style={styles.title}>Technical Skills</Text>
      {skills.map((skillItem) => (
        <SkillItem
          key={skillItem.label}
          label={skillItem.label}
          value={skillItem.value}
        />
      ))}
    </View>
  );
};

export const SkillProps = {
  skills: PropTypes.arrayOf(PropTypes.shape(SkillItemProps).isRequired)
    .isRequired,
};

Skills.propTypes = SkillProps;

export default Skills;
