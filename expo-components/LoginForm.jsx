import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Formik, useField } from "formik";
import SubmitButton from "./FormSubmitButton";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import {
  loginInitialValues,
  loginValidationSchema,
  useLogin,
  signupInitialValues,
  signupValidationSchema,
  useSignup,
} from "../expo-utils/authHooks";

const sharedContainerStyles = {
  padding: 25,
  borderWidth: 1,
  borderColor: "black",
  margin: 25,
};

const Login = () => {
  const { login, loginError } = useLogin();
  const { width } = useWindowDimensions();
  return (
    <Formik
      onSubmit={login}
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
    >
      <View
        style={{ ...sharedContainerStyles, width: width > 600 ? 600 : width }}
      >
        <Text style={styles.formTitle}>Login</Text>
        <FormField name="email" label="Email" />
        <FormField
          name="password"
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton style={styles.loginSubmitContainer} title="Login" />
        {loginError ? (
          <Text style={styles.uniquenessError}>{loginError}</Text>
        ) : null}
      </View>
    </Formik>
  );
};

export const SiteUrlSetter = () => {
  const [{ value }] = useField("siteUrl");
  return (
    <>
      <FormField name="siteUrl" label="Site URL" />
      <Text>
        Your website will be hosted at{" "}
        {`nervous-line.surge.sh/?id=${value || ""}`}
      </Text>
    </>
  );
};

const Signup = () => {
  const { signup, signupError } = useSignup();
  const { width } = useWindowDimensions();
  return (
    <Formik
      onSubmit={signup}
      initialValues={signupInitialValues}
      validationSchema={signupValidationSchema}
    >
      <View
        style={{ ...sharedContainerStyles, width: width > 600 ? 600 : width }}
      >
        <Text style={styles.formTitle}>Sign Up</Text>
        <FormField name="email" label="Email" />
        <FormField
          name="password"
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <FormField
          name="confirmPassword"
          label="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <SiteUrlSetter />
        {signupError ? (
          <Text style={styles.uniquenessError}>{signupError}</Text>
        ) : null}
        <SubmitButton style={styles.loginSubmitContainer} title="Sign Up" />
      </View>
    </Formik>
  );
};

const LoginForm = () => (
  <>
    <Login />
    <Signup />
  </>
);

export default LoginForm;
