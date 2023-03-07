import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/SignUp/Kidzo.png";
import Back from "../../assets/SignUp/Back.png";
import EmailIcon from "../../assets/SignUp/mdi_email-alert.png";
import PassIcon from "../../assets/SignUp/Frame.png";
import Name from "../../assets/SignUp/name.png";
import Phone from "../../assets/SignUp/phone.png";
import Gender from "../../assets/SignUp/gender.png";
import Day from "../../assets/SignUp/day.png";
import Month from "../../assets/SignUp/month.png";
import Year from "../../assets/SignUp/year.png";
import Google from "../../assets/SignUp/logos_google-icon.png";
export default function SingUp() {
  return (
    <ImageBackground source={Back} resizeMode="cover" style={styles.background}>
      <ScrollView>
        <View style={styles.logoView}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <View style={styles.square}>
            <View style={styles.signUpTextView}>
              <Text style={styles.signUpText}>
                Sign Up{"\n"}
                <Text style={styles.accountText}>Already have account? </Text>
                <Text style={styles.signInText}>Sign In</Text>
              </Text>
            </View>
            <View style={styles.emailView}>
              <Text style={styles.inpText}>E-mail</Text>
              <View style={styles.inpView}>
                <Image source={EmailIcon} style={styles.emailIcon} />
                <TextInput style={styles.input} />
              </View>
            </View>
            <View style={styles.passView}>
              <Text style={styles.inpText}>Password</Text>
              <View style={styles.inpView}>
                <Image source={PassIcon} style={styles.passIcon} />
                <TextInput style={styles.input} />
              </View>
            </View>
            <View style={styles.flNameView}>
              <View style={styles.fNameView}>
                <Text style={styles.fName}>First name</Text>
                <View style={styles.fNameInpView}>
                  <Image source={Name} style={styles.fNameIcon} />
                  <TextInput style={styles.fNameInp} />
                </View>
              </View>
              <View style={styles.lNameView}>
                <Text style={styles.lName}>Last name</Text>
                <View style={styles.lNameInpView}>
                  <Image source={Name} style={styles.lNameIcon} />
                  <TextInput style={styles.lNameInp} />
                </View>
              </View>
            </View>
            <View style={styles.phoneView}>
              <Text style={styles.inpText}>Phone number</Text>
              <View style={styles.inpView}>
                <Image source={Phone} style={styles.passIcon} />
                <TextInput style={styles.input} />
              </View>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.inpText}>Gender</Text>
              <View style={styles.inpView}>
                <Image source={Gender} style={styles.passIcon} />
                <TextInput style={styles.input} />
              </View>
            </View>
            <View style={styles.birthdayView}>
              <View style={styles.dayView}>
                <Text style={styles.birthday}>Birthday</Text>
                <View style={styles.dayMonthView}>
                  <View style={styles.DMYInpView}>
                    <Image source={Day} style={styles.DMYIcon} />
                    <TextInput style={styles.DMYInp} />
                  </View>
                  <View style={styles.DMYInpView}>
                    <Image source={Month} style={styles.DMYIcon} />
                    <TextInput style={styles.DMYInp} />
                  </View>
                  <View style={styles.DMYInpView}>
                    <Image source={Year} style={styles.DMYIcon} />
                    <TextInput style={styles.DMYInp} />
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.orText}>
              {"                                        "}
              <Text> Or </Text>
              {"                                        "}
            </Text>
            <View style={styles.SingUpWithGoogleView}>
              <TouchableOpacity style={styles.touch}>
                <Image source={Google} style={styles.GoogleIcon} />
                <Text style={styles.GoogleText}>SingUp with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 40,
  },
  logo: {
    width: 210,
    height: 60,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  square: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "92%",
    height: "100%",
    borderRadius: 15,
    paddingBottom: 20,
  },
  signUpTextView: {
    marginTop: 15,
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
    width: "93%",
  },
  emailIcon: {
    width: 16,
    height: 10.67,
    marginLeft: 10,
  },
  passIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  flNameView: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  fNameView: {
    width: "48%",
  },
  fName: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  fNameInpView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  fNameIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
  },
  fNameInp: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "75%",
  },
  lNameView: {
    width: "48%",
  },
  lName: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  lNameInpView: {
    marginLeft: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  lNameIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
  },
  lNameInp: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "88%",
  },
  birthdayView: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  birthday: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#9374B7",
    fontWeight: "400",
    opacity: 0.5,
  },
  dayMonthView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "99%",
  },
  DMYInpView: {
    flexDirection: "row",
    alignItems: "center",
    width: "35%",
  },
  DMYIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  DMYInp: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 5,
    width: "60%",
  },
  orText: {
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
    marginVertical: 10,
  },
  SingUpWithGoogleView: {
    justifyContent: "center",
    alignItems: "center",
    height: "6%",
    paddingBottom: 2,
  },
  touch: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "100%",
    borderRadius: 5,
  },
  GoogleIcon: {
    marginHorizontal: 10,
    width: 16,
    height: 16,
  },
  GoogleText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#9374B7",
    textAlign: "center",
    marginVertical: 10,
  },
});
