import "react-native-get-random-values";
import React from "react";
import { v4 as uuid } from "uuid";
import FieldList from "./FieldList";
import Skill from "./Skill";

const Skills = () => (
  <FieldList
    name="skills"
    label="Skill"
    title="Skills"
    Component={Skill}
    generateNewSlice={() => ({
      label: "",
      value: "",
      id: uuid(),
    })}
  />
);

export default Skills;
