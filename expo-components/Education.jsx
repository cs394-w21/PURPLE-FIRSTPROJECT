import "react-native-get-random-values";
import React from "react";
import { v4 as uuid } from "uuid";
import FieldList from "./FieldList";
import EducationItem from "./EducationItem";

const Education = () => (
  <FieldList
    name="education"
    label="Institution"
    title="Education"
    Component={EducationItem}
    generateNewSlice={() => ({
      name: "",
      start: "",
      stop: "",
      description: "",
      degree: "",
      id: uuid(),
    })}
  />
);

export default Education;
