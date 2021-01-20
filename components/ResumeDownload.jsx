import React from "react";
import { StyleSheet, Button, View } from "react-native";
import useViewWebsite from "../src/hooks/useViewWebsite";

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: 600,
    width: "100%",
  },
  button: {
    width: "100%",
    borderRadius: 15,
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
const ResumeDownload = () => {
  const viewWebsite = useViewWebsite();
  return (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="Download Resume"
        onPress={viewWebsite}
      />
    </View>
  );
};
/* eslint-enable react/prop-types */

export default ResumeDownload;
