import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "../expo-utils/styles";

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
