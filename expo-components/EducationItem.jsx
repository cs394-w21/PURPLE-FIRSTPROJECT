import React from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const EducationItem = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.listChunk}>
      <FormField label="Name" name={`education[${index}].name`} />
      <FormField label="Start" name={`education[${index}].start`} />
      <FormField label="Stop" name={`education[${index}].stop`} />
      <FormField label="Degree" name={`education[${index}].degree`} />
      <FormField label="Description" name={`education[${index}].description`} />
      <Button onPress={removeItem} title="Remove" />
    </View>
  );
};

EducationItem.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default EducationItem;
