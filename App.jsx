import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "./utils/firebase";

const database = firebase.database();

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
  const [resumeName, updateResumeNameInternal] = useState("");

  // Use callback as to not constantly recreate function definition
  const updateResumeName = useCallback(
    (snap) => {
      const val = snap.val();
      return val && updateResumeNameInternal(val);
    },
    [updateResumeNameInternal]
  );

  useEffect(() => {
    const db = database.ref();
    db.on("value", updateResumeName, window.alert);

    return () => {
      db.off("value", updateResumeName);
    };
  }, [updateResumeName]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {resumeName.name}</Text>
    </View>
  );
}
