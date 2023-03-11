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
import Logo from "../../assets/SignUp/Kidzo.png";
import Back from "../../assets/SignUp/Back.png";
import Frame1Icon from "../../assets/Confirm/Frame1.png";
import BackIcon from "../../assets/Confirm/Frame.png";

export default function Confirm() {
  return (
   
    <ImageBackground source={Back} resizeMode="cover" style={styles.background}>
      <View style={styles.logoView}>
        <Image source={Logo} style={styles.logo} />
      </View>
      
      <View style={styles.body}>
        <View style={styles.square}>
          <View style={styles.BackView}>
            <Image source={BackIcon} style={styles.BackIcon} />
            <Text style={styles.BackText}>Back to sign in</Text>
          </View>
          <View style={styles.ForgotTextView}>
            <Text style={styles.ForgotText}>
              Forgot Password{"\n"}
              <Text style={styles.ConfirmText}>Confirm changes</Text>
            </Text>
          </View>
          <View style={styles.emailView}>
            <Text style={styles.inpText}>Verification Code</Text>
            <View style={styles.inpView}>
              <Image source={Frame1Icon} style={styles.frame1Icon} />
              <TextInput style={styles.input} />
            </View>
            <View style={styles.ButtonView}>
              <TouchableOpacity style={styles.ButtonViewTouch}>
                <Text style={styles.ConfirmTextTouch}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
     
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoView: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 43,
  },
  body: {
    alignItems: "center",
    marginTop: 79,
  },
  square: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "90%",
    height: "65%",
    borderRadius: 15,
  },
  BackView: {
    flexDirection: "row",
    margin: 15,
  },
  BackText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
  },
  ForgotTextView: {
    marginTop: 10,
    marginBottom: 30,
  },
  ForgotText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
  },
  ConfirmText: {
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
    opacity: 0.5,
  },
  inpText: {
    marginHorizontal: 25,
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  inpView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "90%",
  },
  frame1Icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  ButtonView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    marginTop: -25,
  },
  ButtonViewTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: "88%",
    height: "30%",
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
