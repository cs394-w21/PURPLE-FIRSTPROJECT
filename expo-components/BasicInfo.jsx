import React from "react";
import { View, useWindowDimensions } from "react-native";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const BasicInfo = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{ ...styles.formFieldContainer, width: width > 600 ? 600 : width }}
    >
      <FormField label="Name" name="name" />
      <FormField label="Email" name="email" />
      <FormField label="Phone" name="phone" />
      <FormField label="Location" name="location" />
    </View>
  );
};

export default BasicInfo;
