import React from "react";
import { View, Text, TextInput } from "react-native";
import { FastField } from "formik";
import PropTypes from "prop-types";
import ErrorHandler from "./ErrorHandler";
import styles from "../expo-utils/styles";

const FormInputInner = (props) => {
  const { field, form, meta } = props;
  return (
    <>
      <TextInput
        style={styles.formField}
        value={field.value}
        onChangeText={(text) => form.setFieldValue(field.name, text)}
        onBlur={() => form.setFieldTouched(field.name, true)}
      />
      <ErrorHandler meta={meta} />
    </>
  );
};

FormInputInner.propTypes = {
  field: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string.isRequired,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

const FormInput = (props) => {
  const { name } = props;
  return <FastField name={name}>{FormInputInner}</FastField>;
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
};

const FormField = (props) => {
  const { name, label } = props;
  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.formLabel}>{label}</Text>
      <FormInput name={name} />
    </View>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
