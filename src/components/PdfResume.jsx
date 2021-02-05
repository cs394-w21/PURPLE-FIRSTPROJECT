/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const section = {
  margin: 5,
  padding: 5,
  flexGrow: 1,
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  sectionHeader: {
    ...section,
    fontSize: 25,
    fontWeight: 600,
  },
  basicInfo: {
    ...section,
    justifyContent: "center",
    textAlign: "center",
  },
  name: {
    margin: 20,
    fontSize: 30,
    fontWeight: 600,
  },
  email: {
    color: "blue",
    fontDecoration: "underline",
  },
  itemName: {
    fontWeight: 12000,
  },
  sectionItem: {
    textAlign: "left",
    paddingLeft: 15,
    paddingBottom: 10,
  },
});

const BasicInfo = (props) => {
  const { email, name, phone, location } = props;
  const getEmailLink = (emailID) => `mailto:${emailID}`;
  return (
    <View style={styles.basicInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text>Phone: {phone}</Text>
      <Link style={styles.email} src={getEmailLink(email)} target="_blank">
        {" "}
        Email: {email}
      </Link>
      <Text>Location: {location}</Text>
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

const SkillItemProps = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
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
      key={experienceItem.id}
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
    <View style={styles.sectionItem}>
      <Text style={styles.itemName}>{name}</Text>
      <Text>{`${start} - ${stop}`}</Text>
      <Text>{degree}</Text>
      <Text>{description}</Text>
    </View>
  );
};

EducationItem.propTypes = EducationItemProps;

const EducationList = (props) => {
  const { education } = props;
  return education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      name={educationItem.name}
      degree={educationItem.degree}
      description={educationItem.description}
      start={educationItem.start}
      stop={educationItem.stop}
    />
  ));
};

const SkillItem = (props) => {
  const { label, value } = props;
  return (
    <View style={styles.basicInfo}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

SkillItem.propTypes = SkillItemProps;

const SkillList = (props) => {
  const { skills } = props;
  return skills.map((skillItem) => (
    <SkillItem
      key={skillItem.id}
      label={skillItem.label}
      value={skillItem.value}
    />
  ));
};

/* eslint-disable react/prop-types, arrow-body-style */
const Resume = ({ resume, loading }) => {
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
        {resume.education ? (
          <>
            <Text style={styles.sectionHeader}>Education</Text>
            <EducationList education={resume.education} />
          </>
        ) : null}
        {resume.experience ? (
          <>
            <Text style={section}>Experience</Text>
            <ExperienceList experience={resume.experience} />
          </>
        ) : null}
        {resume.experience ? (
          <>
            <Text style={section}>Skills</Text>
            <SkillList skills={resume.skills} />
          </>
        ) : null}
      </Page>
    </Document>
  );
};
/* eslint-enable react/prop-types, arrow-body-style */

export default Resume;
