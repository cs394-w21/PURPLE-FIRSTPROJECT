import React from "react";
import { StyleSheet, Button, View } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: "600px",
    width: "100%",
  },
  button: {
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

/**
 * TODO: Figure out how get resume typed properly
 */
/* eslint-disable react/prop-types */
const ResumeDownload = (props) => {
  const { resume } = props;
  return (
    <View style={styles.buttonContainer}>
      <Button style={styles.button} title="Download Resume" />
    </View>
  );
};
/* eslint-enable react/prop-types */

export default ResumeDownload;
