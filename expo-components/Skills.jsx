import React from "react";
import { View } from "react-native";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const Skills = () => (
  <View style={styles.formFieldContainer}>
    <FormField label="Name" name="name" />
    <FormField label="Email" name="email" />
    <FormField label="Phone" name="phone" />
    <FormField label="Location" name="location" />
  </View>
);

export default Skills;
