import React from "react";
import { Text } from "react-native";
import { Formik } from "formik";
import PropTypes from "prop-types";

const Login = () => {
  return <Text>Login</Text>;
};

const Signup = () => {
  return <Text>Sign up</Text>;
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
