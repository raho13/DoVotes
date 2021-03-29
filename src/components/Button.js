import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Button({ color, text }) {
  return (
    <View style={styles.border}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: color }}>
        {text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  border: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
});
