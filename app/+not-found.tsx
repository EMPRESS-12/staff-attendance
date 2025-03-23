import React from "react";
import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundPage() {
  <>
    <Stack.Screen options={{ title: "Oops Not Found" }} />
    <View style={styles.container}>
      <Link style={styles.button} href="/">
        Go back to home screen
      </Link>
    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
