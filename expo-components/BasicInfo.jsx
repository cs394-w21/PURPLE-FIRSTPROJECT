import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import FormField from "./FormField";
import styles, { borderStyles } from "../expo-utils/styles";

const BasicInfo = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        ...borderStyles,
        width: width > 600 ? 600 : width,
      }}
    >
      <Text style={styles.listTitle}>Basic Info</Text>
      <FormField label="Name" name="name" />
      <FormField label="Email" name="email" />
      <FormField label="Phone" name="phone" />
      <FormField label="Location" name="location" />
    </View>
  );
};

export default BasicInfo;
