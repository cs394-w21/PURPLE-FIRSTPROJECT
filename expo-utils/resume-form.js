import React from "react";
import * as Yup from "yup";

export const useResumeForm = () => {
  const submitForm = React.useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Write me!");
  }, []);
  return {
    submitForm,
  };
};

export const resumeSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
});
