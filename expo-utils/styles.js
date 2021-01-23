import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
    width: width > 600 ? 600 : width,
  },
  skillPair: {
    backgroundColor: "yellow",
    margin: 20,
  },
  formFieldContainer: {
    display: "flex",
    flexDirection: "column",
    width: width > 600 ? 600 : width,
  },
  container: {
    alignItems: "center",
  },
});
