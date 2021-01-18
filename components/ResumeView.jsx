import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import ResumeDownload from "./ResumeDownload";
import BasicInfo, { BasicInfoProps } from "./BasicInfo";
import Education, { EducationProps } from "./Education";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    color: "#808080",
    fontSize: 20,
  },
});

const ResumeView = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
      <ResumeDownload />
      <BasicInfo
        name={resume.name}
        phone={resume.phone}
        email={resume.email}
        location={resume.location}
      />
      <Education education={resume.education} />
    </View>
  );
};

ResumeView.propTypes = {
  resume: PropTypes.shape({
    ...BasicInfoProps,
    ...EducationProps,
  }).isRequired,
};

export default ResumeView;
