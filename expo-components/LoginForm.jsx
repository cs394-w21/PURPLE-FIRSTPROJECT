import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import SubmitButton from "./FormSubmitButton";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import { firebase } from "../src/utils/firebase";

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
  const [loginError, setLoginError] = React.useState(null);
  const login = React.useCallback(async (values) => {
    const { email, password } = values;
    setLoginError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setLoginError(error);
    }
  }, []);
  return {
    login,
    loginError,
  };
};

const sharedContainerStyles = {
  padding: 25,
  borderWidth: 1,
  borderColor: "black",
  margin: 25,
};

const Login = () => {
  const login = useLogin();
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
      </View>
    </Formik>
  );
};

const SiteUrlSetter = () => {
  const [{ value }] = useField("siteUrl");
  return (
    <>
      <FormField name="siteUrl" label="Site URL" />
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

const getSiteSet = async () =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/resumes")
      .once(
        "value",
        (snap) => resolve(new Set(Object.keys(snap.val()))),
        reject
      );
  });

const useSignup = () => {
  const [signupError, setSignInError] = React.useState(null);
  const signup = React.useCallback(async (values) => {
    const { siteUrl, email, password } = values;
    const existingSiteUrls = await getSiteSet();
    if (existingSiteUrls.has(siteUrl)) {
      setSignInError(
        "Someone else has a resume at that location. Please choose another one."
      );
      return;
    }
    try {
      const authCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { user } = authCredential;
      await user.updateProfile({ siteUrl });
    } catch (error) {
      setSignInError(error);
    }
  }, []);
  return { signup, signupError };
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
  <SafeAreaView style={styles.outerContainer}>
    <ScrollView contentContainerStyle={styles.container}>
      <Login />
      <Signup />
    </ScrollView>
  </SafeAreaView>
);

export default LoginForm;
