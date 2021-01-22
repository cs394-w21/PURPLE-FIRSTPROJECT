import React from "react";
import { View, Button, TextInput } from "react-native";
import { Formik, Form, useFormikContext, useField } from "formik";
import styles from "../expo-utils/styles";
import { useResumeForm, resumeSchema } from "../expo-utils/resume-form";

const FormShell = (props) => {
  const { resume, children } = props;
  console.log("in form shell", resume);
  const { submitForm } = useResumeForm("unique-ID");
  return (
    <Formik
      validationSchema={resumeSchema}
      initialValues={{
        email: resume.email,
      }}
      onSubmit={submitForm}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

const FormInput = (props) => {
  const { name } = props;
  const [field, meta, helpers] = useField(name);
  console.log("field is", field, "helpers are", helpers, "meta is", meta);
  return (
    <TextInput
      value={field.value}
      onChangeText={(text) => helpers.setValue(text)}
      onBlur={helpers.setTouched}
    />
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
        <FormInput name="email" value={resume.email} />
        <SubmitButton />
      </FormShell>
    </View>
  );
};

export default ResumeForm;
