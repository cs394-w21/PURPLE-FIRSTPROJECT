import "react-native-get-random-values";
import React from "react";
import { View, Button, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import { FieldArray, useField } from "formik";
import styles from "../expo-utils/styles";

const FieldList = (props) => {
  const { name, label, Component, generateNewSlice } = props;
  const [{ value }] = useField(name);
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.listContainer, width: width > 600 ? 600 : width }}>
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <>
            {value.map((resumeSlice, index) => (
              <Component
                remove={arrayHelpers.remove}
                key={resumeSlice.id}
                index={index}
              />
            ))}
            <Button
              onPress={() => arrayHelpers.push(generateNewSlice())}
              title={`Add ${label}`}
              color="red"
            />
          </>
        )}
      />
    </View>
  );
};

FieldList.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
  generateNewSlice: PropTypes.func.isRequired,
};

export default FieldList;
