import React from "react";
import PropTypes from "prop-types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const section = {
  margin: 10,
  padding: 10,
  flexGrow: 1,
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  section,
  basicInfo: {
    ...section,
    justifyContent: "center",
  },
});

const BasicInfo = (props) => {
  const { email, name, phone, location } = props;
  return (
    <View style={styles.basicInfo}>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
      <Text>{location}</Text>
    </View>
  );
};

BasicInfo.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const ExperienceItemProps = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
};

const EducationItemProps = {
  degree: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
};

const ExperienceItem = (props) => {
  const { description, name, role, start, stop } = props;
  return (
    <View style={styles.basicInfo}>
      <Text>{name}</Text>
      <Text>{role}</Text>
      <Text>{`${start} - ${stop}`}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const ExperienceList = (props) => {
  const { experience } = props;
  return experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.name}
      name={experienceItem.name}
      role={experienceItem.role}
      start={experienceItem.start}
      stop={experienceItem.stop}
      description={experienceItem.description}
    />
  ));
};

ExperienceItem.propTypes = ExperienceItemProps;

const EducationItem = (props) => {
  const { degree, description, name, start, stop } = props;
  return (
    <View style={styles.basicInfo}>
      <Text>{name}</Text>
      <Text>{degree}</Text>
      <Text>{`${start} - ${stop}`}</Text>
      <Text>{description}</Text>
    </View>
  );
};

EducationItem.propTypes = EducationItemProps;

const EducationList = (props) => {
  const { education } = props;
  return education.map((educationItem) => (
    <EducationItem
      key={educationItem.name}
      name={educationItem.name}
      degree={educationItem.degree}
      description={educationItem.description}
      start={educationItem.start}
      stop={educationItem.stop}
    />
  ));
};

/* eslint-disable react/prop-types, arrow-body-style */
const Pdf = ({ resume, loading }) => {
  if (loading) return <Document />;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <BasicInfo
          email={resume.email}
          name={resume.name}
          phone={resume.phone}
          location={resume.location}
        />
        <ExperienceList experience={resume.experience} />
        <EducationList education={resume.education} />
      </Page>
    </Document>
  );
};
/* eslint-enable react/prop-types, arrow-body-style */

export default Pdf;
