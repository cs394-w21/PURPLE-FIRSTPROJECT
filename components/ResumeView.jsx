import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import ResumeDownload from "./ResumeDownload";
import BasicInfo, { BasicInfoProps } from "./BasicInfo";
import Education, { EducationProps } from "./Education";
import Experience, { ExperienceProps } from "./Experience";
import Skills, { SkillProps } from "./Skills";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  subContainer: {
    alignItems: "center",
    maxWidth: "600px",
  },
});

const ResumeView = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ResumeDownload />
        <BasicInfo
          name={resume.name}
          phone={resume.phone}
          email={resume.email}
          location={resume.location}
        />
        <Education education={resume.education} />
        <Experience experience={resume.experience} />
        <Skills skills={resume.skills} />
      </View>
    </View>
  );
};

ResumeView.propTypes = {
  resume: PropTypes.shape({
    ...BasicInfoProps,
    ...EducationProps,
    ...ExperienceProps,
    ...SkillProps,
  }).isRequired,
};

export default ResumeView;
