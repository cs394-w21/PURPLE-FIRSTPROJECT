import React from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const ExperienceItem = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.listChunk}>
      <FormField label="Name" name={`experience[${index}].name`} />
      <FormField label="Start" name={`experience[${index}].start`} />
      <FormField label="Stop" name={`experience[${index}].stop`} />
      <FormField label="Role" name={`experience[${index}].role`} />
      <FormField
        label="Description"
        name={`experience[${index}].description`}
      />
      <Button onPress={removeItem} title="Remove" />
    </View>
  );
};

ExperienceItem.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ExperienceItem;
