import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function Input({ pcr, width, type }) {
  const inputtype = (type) => {
    if (type === "email") {
      return (
        <TextInput
          placeholderTextColor="black"
          style={styles.txtinput}
          placeholder={pcr}
          keyboardType="email-address"
        />
      );
    } else if (type === "password") {
      return (
        <TextInput
          placeholderTextColor="black"
          style={styles.txtinput}
          placeholder={pcr}
          secureTextEntry={true}
        />
      );
    } else {
      return (
        <TextInput
          placeholderTextColor="black"
          style={styles.txtinput}
          placeholder={pcr}
        />
      );
    }
  };
  const inpstyle = (par) => {
    return {
 
      backgroundColor: "#F2F4FD",
      width: par,
      borderRadius: 50,
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 15,
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 10,
    };
  };
  return <View style={inpstyle(width)}>{inputtype(type)}</View>;
}
const styles = StyleSheet.create({
  txtinput: {},
});
