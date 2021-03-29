import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "./Button";
import {color} from "../colors";
import Input from "./Input";
export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <TextInput
          placeholderTextColor="black"
          style={styles.txtinput}
          placeholder="sorğu, profil və ya kateqoriya axtar"
        />
        <View style={styles.iconBorder}>
          <FontAwesome name="search" size={30} style={styles.icon} />
        </View>
      </View>
      <View style={styles.btnsField}>
        <Button color="#0A6CFF" text="Qeydiyyat" />
        <Button color="#2B3548" text="Daxil ol" />
      </View>
      <View style={styles.formField}>
        <View style={styles.inputcnt}>
          <Input pcr="Ad" width="45%" />
          <Input pcr="Soyad" width="45%" />
        </View>
        <Input pcr="Username" width="80%" />
        <Input pcr="E-mail" width="80%" type="email" />
        <Input pcr="Şifrə" width="80%" type="password" />
        <Input pcr="Təkrar Şifrə" width="80%" type="password" />
        <Text style={styles.regbtn}>Qeydiyyat</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
  },
  searchField: {
    alignSelf: "center",
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
  },
  regbtn: {
    borderRadius: 50,
    backgroundColor: "#F2F4FD",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  inputcnt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  btnsField: {
    display: "flex",
    marginTop: 30,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
  },
  formField: {
    width: "100%",
    height: 500,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 70,
  },
  icon: {
    transform: [
      {
        rotateY: "180deg",
      },
    ],
    color: "white",
  },
  txtinput: {
    fontSize: 13,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 100,
    marginRight: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  iconBorder: {
    width: 50,
    height: 50,
    backgroundColor: color.main,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2,
    shadowRadius: 3,
    elevation: 10,
  },
});
