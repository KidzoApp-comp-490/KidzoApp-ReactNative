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
import Back from "../../assets/SignIn/SignIn2.png";
import PassIcon from "../../assets/SignIn/Frame.png";
import EmailIcon from "../../assets/SignIn/mdi_email-alert.png";
import GoogIcon from "../../assets/SignIn/logos_google-icon.png";

export default function SingIn({ navigation }) {
  return (
    <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
      <View style={styles.body}>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>
            Sign in{"\n"}
            <Text style={styles.accountText}>Welcome back</Text>
          </Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.email}>E-mail</Text>
          <View style={styles.emailInpView}>
            <Image source={EmailIcon} style={styles.emailIcon} />
            <TextInput style={styles.emailInp} />
          </View>
        </View>
        <View style={styles.passView}>
          <Text style={styles.pass}>Password</Text>
          <View style={styles.passInpView}>
            <Image source={PassIcon} style={styles.passIcon} />
            <TextInput style={styles.passInp} secureTextEntry />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgetPass");
          }}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity style={styles.touchbutton}>
        <View style={styles.buttoncontainer}>
          <Button
            title="Sign in"
            color="#9374B7"
            onPress={() => {
              navigation.navigate("SingUp");
            }}
          />
        </View>
      </TouchableOpacity> */}
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.ButtonViewTouch}>
          <Text style={styles.ConfirmTextTouch}>Sing In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.line1}>or</Text>

      <Text style={styles.line}>
        {
          "                                                                           "
        }
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.goog}>Sign in with Google</Text>
      </TouchableOpacity>
      <Image source={GoogIcon} style={styles.googicon} />
      <Text style={styles.accountcreate}>
        Don't have an account?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SingUp");
          }}
        >
          <Text style={styles.uptext}>Sign up</Text>
        </TouchableOpacity>
      </Text>
      <View style={{ padding: 20 }}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  accountcreate: {
    // marginVertical: 40,
    color: "#9374B7",
  },
  uptext: {
    textDecorationLine: "underline",
    opacity: 0.5,
  },

  wel: {
    fontFamily: "normal",

    fontSize: 20,
    color: "#9374B7",
    marginTop: 180,
    marginLeft: 10,
  },

  buttoncontainer: {
    marginTop: 70,
    borderRadius: 5,
    width: "80%",
    hight: "100%",
    marginLeft: 5,
  },
  touchbutton: {
    marginTop: 70,
    borderRadius: 5,
    width: "80%",
    hight: "100%",
    marginLeft: 5,
    color: "#9374B7",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    padding: 10,
    width: "80%",
    hight: 35,
    marginTop: 50,
    marginLeft: 5,
    borderRadius: 5,
  },

  forgot: {
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textDecorationLine: "underline",
    margintop: 5,
    marginLeft: 220,
  },
  line1: {
    marginTop: 15,
    color: "#9374B7",
    opacity: 0.5,
  },

  line: {
    textDecorationLine: "underline",
    color: "red",
    marginTop: -15,
  },

  inputpass: {
    borderWidth: 1,
    shadowColor: "black",
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    padding: 10,
    width: "80%",
    hight: "15%",
    marginTop: 70,
    marginLeft: 5,
    borderRadius: 5,
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "80%",
    hight: "100%",
    marginTop: 30,
    borderRadius: 5,
  },
  goog: {
    color: "#9374B7",
  },
  // logo:{
  //   width:'10%',
  // }
  logo: {
    width: 12.6,
    hight: 6.4,
    padding: 10,
    marginTop: -35,
    marginLeft: 250,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  signUpTextView: {
    marginTop: 185,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
  },
  accountText: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
    opacity: 0.5,
  },
  signInText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textDecorationLine: "underline",
  },
  email: {
    marginHorizontal: 40,
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  emailInpView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    marginHorizontal: 35,
    borderRadius: 5,
    alignItems: "center",
  },
  emailIcon: {
    width: 16,
    height: 10.67,
    marginHorizontal: 10,
  },
  googicon: {
    width: 16,
    height: 10.67,
    marginHorizontal: 20,
    padding: 8,
    marginTop: -28,
    marginRight: -180,
  },
  emailInp: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "90%",
  },
  pass: {
    marginHorizontal: 40,
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  passInpView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    marginHorizontal: 35,
    borderRadius: 5,
    alignItems: "center",
  },
  passIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
  },
  passInp: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "90%",
  },
  ButtonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonViewTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    marginTop: 40,
    height: 45,
    backgroundColor: "#9374B7",
    borderRadius: 5,
    overflow: "hidden",
  },
  ConfirmTextTouch: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
  },
});
