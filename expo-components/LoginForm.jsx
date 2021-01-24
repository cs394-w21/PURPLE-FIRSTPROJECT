import React from "react";
import { Text } from "react-native";
import { Formik } from "formik";
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

const Signup = () => {
  return (
    <Formik>
      <Text>Sign up</Text>
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
