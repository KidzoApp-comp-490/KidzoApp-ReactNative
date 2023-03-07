import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SingIn from "./Component/Users/Sign";
import SingUp from "./Component/Users/SingUp"
export default function App() {
  return (
    <View style={styles.container}>
      
    {/* <SingIn/> */}
    <SingUp/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
