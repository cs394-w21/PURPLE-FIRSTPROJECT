import "react-native-get-random-values";
import React from "react";
import { v4 as uuid } from "uuid";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import FieldList from "./FieldList";

const Skill = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.listPair}>
      <FormField label="Skill Label" name={`skills[${index}].label`} />
      <FormField label="Skill Value" name={`skills[${index}].value`} />
      <Button onPress={removeItem} color="red" title="Remove" />
    </View>
  );
};

Skill.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

const Skills = () => (
  <FieldList
    name="skills"
    label="Skill"
    Component={Skill}
    generateNewSlice={() => ({
      label: "",
      value: "",
      id: uuid(),
    })}
  />
);

export default Skills;
