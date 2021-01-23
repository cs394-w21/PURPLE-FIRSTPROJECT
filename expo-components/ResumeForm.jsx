import React from "react";
import { View, Button } from "react-native";
import { Formik, Form, useFormikContext } from "formik";
import PropTypes from "prop-types";
import styles from "../expo-utils/styles";
import { useResumeForm, resumeSchema } from "../expo-utils/resume-form";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";

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
      initialValues={resume}
      onSubmit={submitForm}
    >
      <Form>{children}</Form>
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

const SubmitButton = () => {
  const { submitForm } = useFormikContext();
  return <Button onPress={submitForm} title="save" />;
};

const ResumeForm = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
      <FormShell resume={resume}>
        <BasicInfo />
        <Skills />
        <SubmitButton />
      </FormShell>
    </View>
  );
};

ResumeForm.propTypes = {
  resume: resumePropTypes.isRequired,
};

export default ResumeForm;
