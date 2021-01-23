import "react-native-get-random-values";
import React from "react";
import { View, Text, Button, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import { FieldArray, useField } from "formik";
import styles, { borderStyles } from "../expo-utils/styles";

const FieldList = (props) => {
  const { name, label, title, Component, generateNewSlice } = props;
  const [{ value }] = useField(name);
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        ...borderStyles,
        width: width > 600 ? 600 : width,
      }}
    >
      <Text style={styles.listTitle}>{title}</Text>
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <>
            {value.map((resumeSlice, index) => (
              <View key={resumeSlice.id} style={styles.listItem}>
                <Component remove={arrayHelpers.remove} index={index} />
              </View>
            ))}
            <Button
              onPress={() => arrayHelpers.push(generateNewSlice())}
              title={`Add ${label}`}
            />
          </>
        )}
      />
    </View>
  );
};

FieldList.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
  generateNewSlice: PropTypes.func.isRequired,
};

export default FieldList;
