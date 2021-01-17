import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

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

const ResumeView = (props) => {
  const { resume } = props;
  return (
    <View style={styles.container}>
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
