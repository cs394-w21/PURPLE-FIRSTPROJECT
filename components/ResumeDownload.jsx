import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "cyan",
    textAlign: "center",
    padding: "20px",
    width: "100%",
    borderRadius: "15px",
    border: "1px solid black",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const ResumeDownload = () => (
  // TODO: add OnPressHandler for View
  <View style={styles.button}>
    <Text style={styles.text}>Download Resume</Text>
  </View>
);

export default ResumeDownload;
