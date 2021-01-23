import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  formLabel: {
    paddingRight: 10,
  },
  formField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  skillContainer: {
    backgroundColor: "lightblue",
  },
  skillPair: {
    backgroundColor: "yellow",
    margin: 20,
  },
  formFieldContainer: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    maxWidth: 600,
  },
});
