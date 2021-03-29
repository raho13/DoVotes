import React from "react";
import Login from "./src/screens/Login";
import { Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Login />
    </View>
  );
}
