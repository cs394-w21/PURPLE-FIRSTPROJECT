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
  degree: {
    ...text,
    fontStyle: "italic",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
});

const EducationItem = (props) => {
  const { name, start, stop, degree, description } = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>
        {start}-{stop}
      </Text>
      <Text style={styles.degree}>{degree}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
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
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
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
    </View>
  );
};

export const EducationProps = {
  education: PropTypes.arrayOf(PropTypes.shape(EducationItemProps).isRequired)
    .isRequired,
};

Education.propTypes = EducationProps;

export default Education;