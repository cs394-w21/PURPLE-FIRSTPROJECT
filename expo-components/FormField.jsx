import React from "react";
import { View, Text, TextInput } from "react-native";
import { FastField } from "formik";
import PropTypes from "prop-types";
import ErrorHandler from "./ErrorHandler";
import styles from "../expo-utils/styles";

const FormInput = (props) => {
  const { name, autoCapitalize, secureTextEntry, textContentType } = props;
  const FormInputInner = React.useCallback(
    (renderProps) => {
      const { field, form, meta } = renderProps;
      return (
        <>
          <TextInput
            style={styles.formField}
            value={field.value}
            onChangeText={(text) => form.setFieldValue(field.name, text)}
            onBlur={() => form.setFieldTouched(field.name, true)}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
          />
          <ErrorHandler meta={meta} />
        </>
      );
    },
    [autoCapitalize, secureTextEntry, textContentType]
  );
  return <FastField name={name}>{FormInputInner}</FastField>;
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  textContentType: PropTypes.string,
};

FormInput.defaultProps = {
  secureTextEntry: false,
  autoCapitalize: "none",
  textContentType: "none",
};

const FormField = (props) => {
  const {
    name,
    label,
    autoCapitalize,
    secureTextEntry,
    textContentType,
  } = props;
  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.formLabel}>{label}</Text>
      <FormInput
        name={name}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  textContentType: PropTypes.string,
};

FormField.defaultProps = {
  secureTextEntry: false,
  autoCapitalize: "none",
  textContentType: "none",
};

export default FormField;
