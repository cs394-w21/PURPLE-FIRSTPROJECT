import React from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const Skill = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.listChunk}>
      <FormField label="Skill Label" name={`skills[${index}].label`} />
      <FormField label="Skill Value" name={`skills[${index}].value`} />
      <Button onPress={removeItem} title="Remove" />
    </View>
  );
};

Skill.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Skill;
