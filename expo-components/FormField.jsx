import React from "react";
import { Text, TextInput } from "react-native";
import { useField } from "formik";
import PropTypes from "prop-types";
import ErrorHandler from "./ErrorHandler";
import styles from "../expo-utils/styles";

const useFormField = (name) => {
  const [{ value }, meta, { setValue, setTouched }] = useField(name);
  const onChangeText = React.useCallback(
    (text) => {
      setValue(text);
    },
    [setValue]
  );
  return {
    value,
    onChangeText,
    meta,
    setTouched,
  };
};

const FormField = (props) => {
  const { name, label } = props;
  const { value, onChangeText, meta, setTouched } = useFormField(name);
  return (
    <>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={styles.formField}
        value={value}
        onChangeText={onChangeText}
        onBlur={setTouched}
      />
      <ErrorHandler meta={meta} />
    </>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
