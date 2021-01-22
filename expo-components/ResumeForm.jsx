import React from "react";
import { View, Button } from "react-native";
import { Formik, Form, useFormikContext } from "formik";
import styles from "../expo-utils/styles";
import { useResumeForm, resumeSchema } from "../expo-utils/resume-form";

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

const SubmitButton = () => {
  const { submitForm } = useFormikContext();
  return <Button onPress={submitForm} title="save" />;
};

const ResumeForm = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
      <FormShell resume={resume}>
        <SubmitButton />
      </FormShell>
    </View>
  );
};

export default ResumeForm;
