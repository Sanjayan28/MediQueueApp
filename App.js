import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello world ! welcome</Text> */}
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
