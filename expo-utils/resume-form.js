import React from "react";
import * as Yup from "yup";
import { firebase } from "../src/utils/firebase";

const intoFirebaseObject = (array) =>
  array.reduce((acc, el, index) => ({ ...acc, [index]: el }), {});

const mapFormToDb = (formValues) => ({
  ...formValues,
  experience: intoFirebaseObject(formValues.experience),
  education: intoFirebaseObject(formValues.education),
  skills: intoFirebaseObject(formValues.skills),
});

const database = firebase.database();

export const useResumeForm = (resumeId) => {
  const submitForm = React.useCallback(
    (formValues) => {
      // eslint-disable-next-line no-console
      console.log(resumeId);
      console.log(mapFormToDb(formValues));
      database.ref(`/resumes/${resumeId}`).set(mapFormToDb(formValues));
      console.log("this ran");
    },
    [resumeId]
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

export const defaultInitialValues = {
  name: "",
  email: "",
  location: "",
  phone: "",
  education: [],
  experience: [],
  skills: [],
};
