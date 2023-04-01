import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/Home/Logo2.png";
import Mom from "../assets/Home/Group80.png";
import Session from "../assets/Home/Session.png";
import Map from "../assets/Home/Map.png";
import Information from "../assets/Home/Info.png";
import Expert from "../assets/Home/Expert.png";
import MedicalHistory from "../assets/Home/MedicalHistory.png";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <View style={styles.content}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.LogoView}>
            <Image source={Logo} style={styles.Logo} />
          </View>
          <View style={styles.MomView}>
            <Image source={Mom} style={styles.Mom} />
          </View>
        </View>

        <View style={styles.body}>
          <View style={{ marginRight: 206 }}>
            <Text style={styles.WelcomeTxt}>Welcome, Ann</Text>
          </View>
          <TouchableOpacity style={styles.square}>
            <Image source={Session} style={styles.squareImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}>
            <Image source={Map} style={styles.squareImg} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => {
              navigation.navigate("Info");
            }}
          >
            <Image source={Information} style={styles.squareImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}>
            <Image source={Expert} style={styles.squareImg} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => {
              navigation.navigate("Medical");
            }}
          >
            <Image source={MedicalHistory} style={styles.squareImg} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 156,
    height: 66,
    marginTop: 75,
    marginRight: 104,
  },
  Mom: {
    marginTop: 73,
    width: 75,
    height: 77,
  },
  WelcomeTxt: {
    marginLeft: 16,
    color: "#0B3B63",
    fontWeight: "700",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  body: {
    marginHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 70,
  },
  square: {
    width: 328,
    height: 152,
    marginBottom: 16,
    padding: 10,
  },
  squareImg: {
    width: 328,
    height: 152,
    borderRadius: 15,
  },
});
