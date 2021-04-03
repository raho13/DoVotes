import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "./Button";
import { color } from "../colors";
import Input from "./Input";
export default function Form() {
  const [field, setfield] = useState(true);
  const handlefield = (a) => {
    if (a === 1) {
      setfield(true);
    }else{
      setfield(false);

    }
  };
  const activeField = () => {
    if (field) {
      return (
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
      );
    } else {
      return (
        <View style={styles.formField}>
          <Input pcr="Username və ya Email" width="80%" />
          <Input pcr="Şifrə" width="80%" type="password" />
          <Text style={styles.regbtn}>Daxil ol</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <TextInput
          placeholderTextColor="black"
          style={styles.txtinput}
          placeholder="sorğu, profil və ya kateqoriya axtar"
        />
        <View style={styles.iconBorder}>
          {/* <FontAwesome name="search" size={30} style={styles.icon} /> */}
        </View>
      </View>
      {field ? (
        <View style={styles.btnsField}>
          <Button
            data={field}
            method={() => handlefield(1)}
            color="white"
            text="Qeydiyyat"
            bck={color.blue}
          />
          <Button
            data={field}
            method={() => handlefield(2)}
            color="#2B3548"
            text="Daxil ol"
            bck="white"
          />
        </View>
      ) : (
        <View style={styles.btnsField}>
          <Button method={() => handlefield(1)} color="#2B3548" text="Qeydiyyat" bck="white" />
          <Button  method={() => handlefield(2)} color="white" text="Daxil ol" bck={color.blue} />
        </View>
      )}

      {activeField()}
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
    width: "80%",
    height: 40,
  },
  regbtn: {
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 35,
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
    color: color.blue,
  },
  txtinput: {
    fontSize: 13,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 100,
    marginRight: 10,
    width: "100%",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  iconBorder: {
    position: "absolute",
    right: 10,
    top: 5,
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
