import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import ResumeDownload from "./ResumeDownload";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    color: "#808080",
    fontSize: 20,
  },
});

const ResumeView = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
      <ResumeDownload />
      <Text style={styles.text}>Name: {resume.name}</Text>
    </View>
  );
};

ResumeView.propTypes = {
  resume: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResumeView;
