import { StyleSheet } from "react-native";

export const borderStyles = {
  marginBottom: 25,
  borderWidth: 3,
  borderColor: "black",
  padding: 25,
};

export default StyleSheet.create({
  formTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  formIntroContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "black",
    marginTop: 65,
  },
  introContainerButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  introContainerButton: {
    paddingRight: 10,
    paddingLeft: 10,
  },
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
  listChunk: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: "darkblue",
  },
  listItem: {
    paddingBottom: 25,
  },
  listTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  formFieldContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "black",
    padding: 25,
  },
  submitContainer: {
    margin: 10,
    width: 200,
  },
  loginSubmitContainer: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  formInputContainer: {
    paddingBottom: 10,
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
  uniquenessError: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    alignItems: "center",
  },
  notificationBanner: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
});
