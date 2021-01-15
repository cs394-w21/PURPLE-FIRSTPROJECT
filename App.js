import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ResumeSync! Make your resume and website with the click of a button</Text>
      <Text style={styles.text}>You fill in a form and push a button. Amazing!</Text>
      <Text style={styles.text}>------------------------------</Text>
      <Button title="Like this"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#808080',
    fontSize: 20
  }
});
