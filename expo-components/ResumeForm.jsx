import React from "react";
import { Text, View, ScrollView, SafeAreaView, Button } from "react-native";
import { Formik } from "formik";
import PropTypes from "prop-types";
import styles from "../expo-utils/styles";
import {
  useResumeForm,
  resumeSchema,
  defaultInitialValues,
} from "../expo-utils/resume-form";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import useViewWebsite from "../src/hooks/useViewWebsite";
import SubmitButton from "./FormSubmitButton";

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
  ).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      stop: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
});

const FormShell = (props) => {
  const { resume, children } = props;
  const { submitForm } = useResumeForm("unique-ID");
  return (
    <Formik
      validationSchema={resumeSchema}
      initialValues={resume || defaultInitialValues}
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
  return (
    <View style={styles.formIntroContainer}>
      <Text style={styles.formTitle}>Edit Your Resume</Text>
      <Button onPress={viewWebsite} title="View Website" />
    </View>
  );
};

const ResumeForm = (props) => {
  const { resume } = props;
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <FormIntro />
        <FormShell resume={resume}>
          <BasicInfo />
          <Education />
          <Experience />
          <Skills />
          <SubmitButton title="Save" />
        </FormShell>
      </ScrollView>
    </SafeAreaView>
  );
};

ResumeForm.propTypes = {
  resume: resumePropTypes.isRequired,
};

export default ResumeForm;
