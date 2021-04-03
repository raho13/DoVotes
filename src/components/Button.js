import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Button({ color, text, bck, method, data }) {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
      onPress={() => {
        method();
      }}
      style={[styles.border, { backgroundColor: bck }]}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: color }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  border: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
});
