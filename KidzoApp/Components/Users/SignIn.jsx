import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/SignIn/Kidzo.png";
import Or from "../../assets/SignIn/OR.png";
import Google from "../../assets/SignIn/logos_google-icon.png";
import { TabFun } from "../../App";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoView}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}> Sign In</Text>
          <Text style={styles.word}>Welcome back!</Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.inpText}>E-mail</Text>
          <View style={styles.inpView}>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.passView}>
          <Text style={styles.inpText}>Password</Text>
          <View style={styles.inpView}>
            <TextInput style={styles.input} secureTextEntry />
          </View>
        </View>
        <View style={styles.forgotwordview}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgetPass");
            }}
          >
            <Text style={styles.forgotword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("TabFun");
            }}
          >
            <View style={styles.button2}>
              <Text style={styles.button1}> Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.orimageview}>
          <Image source={Or} style={styles.orimage} />
        </View>

        <View style={styles.SinginWithGoogleView}>
          <TouchableOpacity style={styles.touch}>
            <Image source={Google} style={styles.GoogleIcon} />
            <View style={styles.GoogleTextView}>
              <Text style={styles.GoogleText}>Sing in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.uptextView}>
          <Text style={styles.accountcreate}>
            Don't have an account?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.uptext}>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
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
  titleView: {
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 18,
  },
  word: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,
  },
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
  passView: {
    marginTop: 30,
  },
  forgotword: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 14,
    color: "#FFA8C5",
    textDecorationLine: "underline",
  },
  forgotwordview: {
    marginLeft: 216,
    marginTop: 10,
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
  orimage: {
    width: 300,
    height: 45,
  },
  orimageview: {
    marginTop: 30,
  },

  touch: {
    borderColor: "#0B3B63",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
  },
  GoogleIcon: {
    marginTop: 15,
    marginLeft: 78,
    width: 16,
    height: 16,
  },
  GoogleText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    textAlign: "center",
  },
  GoogleTextView: {
    marginTop: -15,
  },
  SinginWithGoogleView: {
    marginTop: 30,
  },
  accountcreate: {
    color: "#0B3B63",
    opacity: 0.65,
  },
  uptext: {
    textDecorationLine: "underline",
    color: "#FFA8C5",
  },
  uptextView: {
    marginTop: 30,
    marginRight: 130,
    marginBottom: 72,
  },
});
