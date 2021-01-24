import React from "react";
import { Text } from "react-native";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import SubmitButton from "./FormSubmitButton";
import FormField from "./FormField";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});

const loginInitialValues = {
  email: "",
  password: "",
};

const useLogin = () => {
  const login = React.useCallback(() => {
    console.log("Hey! Figure out how to login!");
  }, []);
  return login;
};

const Login = () => {
  const login = useLogin();
  return (
    <Formik
      onSubmit={login}
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
    >
      <>
        <Text>Login</Text>
        <FormField name="email" label="Email" />
        <FormField
          name="password"
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </>
    </Formik>
  );
};

const SiteUrlSetter = () => {
  const [{ value }] = useField("siteUrl");
  return (
    <>
      <FormField name="siteUrl" label="Site URL"></FormField>
      <Text>
        Your website will be hosted at {`nervous-line.surge.sh/${value || ""}`}
      </Text>
    </>
  );
};

const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
  siteUrl: Yup.string()
    .required("Please enter a path for your site's URL")
    .label("Site URL"),
});

const signupInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  siteUrl: "",
};

const useSignup = () => {
  const signup = React.useCallback(() => {
    console.log("Hey! Figure out how to sign up!");
  }, []);
  return signup;
};

const Signup = () => {
  const signup = useSignup();

  return (
    <Formik
      onSubmit={signup}
      initialValues={signupInitialValues}
      validationSchema={signupValidationSchema}
    >
      <>
        <Text>Login</Text>
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
        <SiteUrlSetter></SiteUrlSetter>
        <SubmitButton title="Sign Up" />
      </>
    </Formik>
  );
};

const LoginForm = () => {
  return (
    <>
      <Login />
      <Signup />
    </>
  );
};

export default LoginForm;
