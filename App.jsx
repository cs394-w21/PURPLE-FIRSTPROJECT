import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useResume from "./hooks/useResume";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#808080",
    fontSize: 20,
  },
});

export default function App() {
  const resumeName = useResume();

  // adding if statement to load empty view if firebase has not returned data yet.
  if (!resumeName) {
    return <View style={styles.container} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {resumeName.name}</Text>
    </View>
  );
}
