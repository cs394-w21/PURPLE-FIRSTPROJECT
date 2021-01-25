import React from "react";
import * as Yup from "yup";
import { useToastBannerToggler, Transition } from "react-native-toast-banner";
import { Text } from "react-native";
import { firebase, mapFormToDb } from "../src/utils/firebase";
import styles from "./styles";

const SuccessBanner = () => (
  <Text style={styles.successBanner}>Saved successfully!</Text>
);

const bannerConfig = {
  contentView: <SuccessBanner />,
  backgroundColor: "green",
  duration: 2000,
  transitions: [Transition.FadeInOut],
};

const database = firebase.database();

export const useResumeForm = (resumeId) => {
  const { showBanner } = useToastBannerToggler();
  const submitForm = React.useCallback(
    (formValues) => {
      database.ref(`/resumes/${resumeId}`).set(mapFormToDb(formValues));
      showBanner(bannerConfig);
    },
    [resumeId, showBanner]
  );
  return {
    submitForm,
  };
};

const educationSchema = Yup.array(
  Yup.object().shape({
    name: Yup.string().required("Please enter the name of the institution."),
    start: Yup.string().required("Please enter the start date."),
    stop: Yup.string().required("Please enter the stop date."),
    degree: Yup.string().required("Please enter the name of your degree."),
    description: Yup.string(),
  })
);

const experienceSchema = Yup.array(
  Yup.object().shape({
    name: Yup.string().required("Please enter the name of the company."),
    start: Yup.string().required("Please enter the start date."),
    stop: Yup.string().required("Please enter the stop date."),
    role: Yup.string().required("Please enter the name of your role."),
    description: Yup.string(),
  })
);

const skillSchema = Yup.array(
  Yup.object().shape({
    label: Yup.string().required("Please enter the name of the skill."),
    value: Yup.string().required("Please describe your expertise."),
  })
);

export const resumeSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string().required("Please add your email."),
  location: Yup.string().required("Please enter your location."),
  phone: Yup.string().required("Please enter a phone number."),
  education: educationSchema,
  experience: experienceSchema,
  skills: skillSchema,
});
