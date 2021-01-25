import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { View, Button } from "react-native";
import styles from "../expo-utils/styles";

const SubmitButton = (props) => {
  const { submitForm } = useFormikContext();
  const { title, style } = props;
  return (
    <View style={style}>
      <Button onPress={submitForm} title={title} />
    </View>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
};

SubmitButton.defaultProps = {
  style: styles.submitContainer,
};

export default SubmitButton;
