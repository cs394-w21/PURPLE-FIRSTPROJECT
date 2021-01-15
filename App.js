import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { firebase } from "./utils/firebase";
import { Button, StyleSheet, Text, View } from "react-native";
import { util } from "prettier";

const database = firebase.database();

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
  }, [database, updateResumeName]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ResumeSync: Make your resume and website with the click of a button
      </Text>
      <Text style={styles.text}>------------------------------</Text>
      <Text style={styles.text}>Name: {resumeName.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
