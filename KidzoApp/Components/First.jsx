import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Logo from "../assets/Intro/Logo2.png";

export default function First({ navigation }) {
  const opacity = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => navigation.navigate("SignIn"));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity,
      }}
    >
      <View style={styles.body}>
        <Image source={Logo} style={styles.Logo} />
      </View>
      <StatusBar style="auto" />
    </Animated.View>
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
