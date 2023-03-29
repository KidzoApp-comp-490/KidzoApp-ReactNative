import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Logo from "../assets/Intro/Logo2.png";

export default function First() {
  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.Logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 156,
    height: 66,
  },
});
