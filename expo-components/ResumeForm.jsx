import React from "react";
import { Text, View, Button } from "react-native";
import { Formik } from "formik";
import PropTypes from "prop-types";
import styles from "../expo-utils/styles";
import { useResumeForm, resumeSchema } from "../expo-utils/resume-form";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import useViewWebsite from "../expo-utils/useViewWebsite";
import SubmitButton from "./FormSubmitButton";
import useUser from "../expo-utils/useUser";
import { useLogout } from "../expo-utils/authHooks";

const resumePropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      stop: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
    })
  ),
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      stop: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
});

const FormShell = (props) => {
  const { resume, children } = props;
  const user = useUser();
  const { submitForm } = useResumeForm(user.siteUrl);
  return (
    <Formik
      validationSchema={resumeSchema}
      initialValues={resume}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      <>{children}</>
    </Formik>
  );
};

FormShell.propTypes = {
  resume: resumePropTypes.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const FormIntro = () => {
  const viewWebsite = useViewWebsite();
  const logout = useLogout();
  return (
    <View style={styles.formIntroContainer}>
      <Text style={styles.formTitle}>Edit Your Resume</Text>
      <View style={styles.introContainerButtonContainer}>
        <SubmitButton style={styles.introContainerButton} title="Save" />
        <View style={styles.introContainerButton}>
          <Button onPress={viewWebsite} title="View Website" />
        </View>
        <View style={styles.introContainerButton}>
          <Button onPress={logout} title="Log Out" />
        </View>
      </View>
    </View>
  );
};

const ResumeForm = (props) => {
  const { resume } = props;
  return (
    <FormShell resume={resume}>
      <FormIntro />
      <BasicInfo />
      <Education />
      <Experience />
      <Skills />
      <SubmitButton title="Save" />
    </FormShell>
  );
};

ResumeForm.propTypes = {
  resume: resumePropTypes.isRequired,
};

export default ResumeForm;
