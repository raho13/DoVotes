import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerlog}>
        <View style={styles.logocnt}>
          <Image
            style={{ height: "100%", resizeMode: "contain" }}
            source={require("../../assets/hand.png")}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headertxt1}>DoVotes</Text>
            <Text style={styles.headertxt2}>səs ver, seç</Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.storyField}
      >
        <View style={styles.story}>
          <View style={styles.storyborder}>
            <Image
              source={require("../../assets/static/avatar.jpg")}
              style={styles.storyimg}
            />
          </View>

          <Text style={styles.storytxt}>ictimai fəallar</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    borderBottomWidth: 1,
  },
  headertxt2: {
    marginTop: -8,
  },
  headertxt1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0A6CFF",
  },
  storyborder: {
    borderColor: "#F7CA44",
    borderRadius: 100,
    borderWidth: 3,
    alignItems: "center",
  },
  storyField: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 110,
  },
  storytxt: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
  storyimg: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: "white",
  },
  story: {
    alignItems: "center",
    height: 110,
    width: 110,
  },
  logocnt: {
    height: "80%",
    display: "flex",
    flexDirection: "row",
  },
  headerlog: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },
});
