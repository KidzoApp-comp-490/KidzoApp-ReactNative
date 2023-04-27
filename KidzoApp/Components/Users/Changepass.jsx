import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/ForgotPass/Logo 2.png";
import Frame from "../../assets/ForgotPass/Frame.png";

export default function Changepass({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.frameView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Image source={Frame} style={styles.frame} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleViwe}>
        <Text style={styles.title}>Change your password</Text>
        
      </View>
      <View style={styles.emailView}>
        <Text style={styles.inpText}>Current password</Text>
        <View style={styles.inpView}>
          <TextInput style={styles.input} secureTextEntry />
        </View>
      </View>

      <View style={styles.emailView}>
        <Text style={styles.inpText}>New password</Text>
        <View style={styles.inpView}>
          <TextInput style={styles.input} secureTextEntry />
        </View>
      </View>

     

      
      <View style={styles.buttonview}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.button2}>
            <Text style={styles.button1}> Change password</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffff",
  },
  logoView: {
    marginTop: 76,
    alignItems: "center",
  },
  logo: {
    width: 156,
    height: 66,
  },
  frameView: {
    marginRight: 325,
    marginLeft: 21,
    marginTop: -50,
  },
  frame: {
    width: 24,
    height: 20,
  },
  titleViwe: {
    alignItems: "center",
    marginTop: 54,
  },
  title: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 18,
  },
//   word: {
//     color: "#0B3B63",
//     fontFamily: "Montserrat",
//     fontWeight: 500,
//     fontSize: 14,
//     opacity: 0.65,
//   },
  emailView: {
    marginTop: 32,
  },
  inpText: {
    color: "#0B3B63A6",
    marginBottom: 5,
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 14,
    opacity: 0.65,
  },
  input: {
    backgroundColor: "#ffff",
    borderColor: "#FFA8C5",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
  },
  buttonview: {
    marginTop: 30,
  },
  button: {
    borderRadius: 5,
    width: 328,
    height: 48,
    backgroundColor: "#FFA8C5",
    color: "#ffff",
  },
  button1: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 15,
    color: "#ffff",
  },
  button2: {
    alignItems: "center",
    marginTop: 15,
  },
});
