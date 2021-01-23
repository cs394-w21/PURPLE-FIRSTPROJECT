import "react-native-get-random-values";
import React from "react";
import { v4 as uuid } from "uuid";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import FieldList from "./FieldList";

const EducationItem = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.listPair}>
      <FormField label="Name" name={`education[${index}].name`} />
      <FormField label="Start" name={`education[${index}].start`} />
      <FormField label="Stop" name={`education[${index}].stop`} />
      <FormField label="Degree" name={`education[${index}].degree`} />
      <FormField label="Description" name={`education[${index}].description`} />
      <Button onPress={removeItem} color="red" title="Remove" />
    </View>
  );
};

EducationItem.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

const Education = () => (
  <FieldList
    name="education"
    label="Institution"
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
