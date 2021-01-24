import React from "react";
import * as Yup from "yup";
import { firebase } from "../src/utils/firebase";

export const useLogout = () => {
  const logout = React.useCallback(() => {
    firebase.auth().signOut();
  }, []);
  return logout;
};

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const useLogin = () => {
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

export const signupValidationSchema = Yup.object().shape({
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

export const signupInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  siteUrl: "",
};

export const getSiteSet = async () =>
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

export const useSignup = () => {
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
