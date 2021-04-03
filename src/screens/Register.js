import React from "react";
import { StyleSheet, Text, View ,ScrollView} from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";

export default function Register() {
  return (
    <ScrollView>
      <Header />
      <Form />
    </ScrollView>
  );
}
