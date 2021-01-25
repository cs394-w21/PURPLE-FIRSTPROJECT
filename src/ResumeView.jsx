import React from "react";
// import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
// import PropTypes from "prop-types";
import BasicInfo from "./BasicInfo";
/* import Education, { EducationProps } from "./Education";
import Experience, { ExperienceProps } from "./Experience";
import Skills, { SkillProps } from "./Skills"; */

/* const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  subContainer: {
    alignItems: "center",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
*/

/**
 * TODO: Figure out how get resume typed properly
 */
/* eslint-disable react/prop-types */
const ResumeView = (props) => {
  const { resume } = props;
  return (
    <div>
      <BasicInfo
        name={resume.name}
        phone={resume.phone}
        email={resume.email}
        location={resume.location}
      />
      {/*        <View style={styles.sectionContainer}>
          <Education education={resume.education} />
          <Experience experience={resume.experience} />
          <Skills skills={resume.skills} />
  </View> */}
    </div>
  );
};
/* eslint-enable react/prop-types */

export default ResumeView;
