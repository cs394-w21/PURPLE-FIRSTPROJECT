import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { View, Button } from "react-native";
import styles from "../expo-utils/styles";

const SubmitButton = (props) => {
  const { submitForm } = useFormikContext();
  const { title } = props;
  return (
    <View style={styles.submitContainer}>
      <Button onPress={submitForm} title={title} />
    </View>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
