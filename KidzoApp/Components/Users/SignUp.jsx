import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/SignIn/Kidzo.png";
import { RadioButton } from "react-native-paper";
import OR from "../../assets/SignUp/OR.png";
import Google from "../../assets/SignIn/logos_google-icon.png";
import { register, getUserUId } from "../../db/firebase/auth";
import { auth, provider } from "../../db/Config";
import { Addusers } from "../../db/firebase/users";
import { signInWithPopup } from "firebase/auth";
import PassIconV from "../../assets/SignIn/fluent_eye-24-regular.png";
import PassIconInV from "../../assets/SignIn/fluent_eye-off-16-regular.png";

export default function SignUp({ navigation }) {
  const [value, setValue] = useState("");
  const SingUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const [checked, setChecked] = useState("first");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("Female");

  const checkDate = () => {
    if (
      email.length === 0 &&
      password.length === 0 &&
      fName.length === 0 &&
      lName.length === 0 &&
      phone.length === 0 &&
      day.length === 0 &&
      month.length === 0 &&
      year.length === 0
    ) {
      alert("invalid information");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
    } else {
      register(email, password)
        .then(() => {
          console.log("registerd");
          alert("Register Success!\nPlease Login");
          navigation.navigate("SignIn");
          getUserUId().then((id) => {
            Addusers({
              uid: id,
              email: email,
              password: password,
              fName: fName,
              lName: lName,
              phone: phone,
              day: day,
              month: month,
              year: year,
              gender: gender,
            });
          });
        })
        .catch((err) => {
          {
            if (
              err.message.includes("already-in-use") &&
              email !== "" &&
              password !== ""
            ) {
              alert("The email is already exist");
            } else if (err.message.includes("invalid-email") && email !== "") {
              alert("The Email is incorrect");
            }
          }
        });
    }
  };

  const [icon, setIcon] = useState(true);
  const clickEye = () => {
    icon ? setIcon(false) : setIcon(true);
  };
  let imageSource = icon ? PassIconInV : PassIconV;

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.LogoView}>
          <Image source={Logo} style={styles.Logo} />
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>
            Sign Up{"\n"}
            <Text style={styles.accountText}>Already have account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.inpText}>Email</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(val) => {
                setEmail(val);
              }}
            />
          </View>
        </View>
        <View style={styles.PassView}>
          <Text style={styles.passText}>Password</Text>
          {icon ? (
            <View style={styles.inpViewPass}>
              <TextInput
                style={styles.inputPass}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                onChangeText={(val) => setPassword(val)}
              />
              <TouchableOpacity onPress={clickEye}>
                <Image
                  source={imageSource}
                  style={{ width: 14, height: 14, marginHorizontal: 5 }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.inpViewPass}>
              <TextInput
                style={styles.inputPass}
                onChangeText={(val) => setPassword(val)}
              />
              <TouchableOpacity onPress={clickEye}>
                <Image
                  source={imageSource}
                  style={{ width: 14, height: 14, marginHorizontal: 5 }}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.flNameView}>
          <View style={styles.fNameView}>
            <Text style={styles.fName}>First name</Text>
            <View style={styles.fNameInpView}>
              <TextInput
                style={styles.fNameInp}
                onChangeText={(val) => {
                  setFName(val);
                }}
              />
            </View>
          </View>
          <View style={styles.lNameView}>
            <Text style={styles.lName}>Last name</Text>
            <View style={styles.lNameInpView}>
              <TextInput
                style={styles.lNameInp}
                onChangeText={(val) => {
                  setLName(val);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.PhoneView}>
          <Text style={styles.inpText}>Phone number</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              onChangeText={(val) => {
                setPhone(val);
              }}
            />
          </View>
        </View>
        <View style={styles.Gender}>
          <Text style={styles.GenderTxt}>Gender</Text>
          <View style={styles.FMView}>
            <View style={styles.FemaleView}>
              <Text style={styles.FemaleTxt}>Female</Text>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked("first");
                }}
                color="#FFA8C5"
                uncheckedColor="#FFA8C5"
              />
            </View>
            <View style={styles.maleView}>
              <Text style={styles.maleTxt}>Male</Text>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked("second"), setGender("male");
                }}
                color="#FFA8C5"
                uncheckedColor="#FFA8C5"
              />
            </View>
          </View>
        </View>
        <View style={styles.birthdayView}>
          <Text style={styles.birthdayTxt}>Date of birth</Text>
          <View style={styles.DMYView}>
            <View style={styles.dayInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Day"
                keyboardType="number-pad"
                onChangeText={(val) => {
                  setDay(val);
                }}
              />
            </View>
            <View style={styles.monthInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Month"
                keyboardType="number-pad"
                onChangeText={(val) => {
                  setMonth(val);
                }}
              />
            </View>
            <View style={styles.yearInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Year"
                keyboardType="number-pad"
                onChangeText={(val) => {
                  setYear(val);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.button} onPress={checkDate}>
            <View style={styles.button2}>
              <Text style={styles.button1}> Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.orView}>
          <Image source={OR} style={styles.or} />
        </View>
        <View style={styles.SingUpWithGoogleView}>
          {value ? (
            navigation.navigate("TabFun")
          ) : (
            <TouchableOpacity style={styles.touch} onPress={SingUpWithGoogle}>
              <Image source={Google} style={styles.GoogleIcon} />
              <Text style={styles.GoogleText}>SingUp with Google</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  LogoView: {
    alignItems: "center",
    marginTop: 76,
  },
  Logo: {
    width: 156,
    height: 66,
  },
  signUpTextView: {
    marginTop: 16,
  },
  signUpText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    textAlign: "center",
  },
  accountText: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#0B3B63",
    textAlign: "center",
    opacity: 0.65,
  },
  signInText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#FFA8C5",
    textDecorationLine: "underline",
  },
  emailView: {
    marginTop: 32,
  },
  inpText: {
    marginHorizontal: 16,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    opacity: 0.65,
  },
  inpView: {
    backgroundColor: "#FFFFFF",
    marginTop: 5,
    marginHorizontal: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 5,
    width: 328,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    paddingLeft: 5,
  },
  PassView: {
    marginTop: 32,
  },
  passText: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    marginBottom: 5,
    opacity: 0.65,
  },
  inpViewPass: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderColor: "#FFA8C5",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  inputPass: {
    backgroundColor: "#ffff",
    borderColor: "#FFA8C5",
    width: 300,
    height: 44,
    paddingLeft: 5,
  },
  flNameView: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 32,
  },
  fName: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    opacity: 0.65,
  },
  fNameInp: {
    backgroundColor: "#FFFFFF",
    width: 156,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    paddingLeft: 5,
  },
  lNameView: {
    marginLeft: 16,
  },
  lName: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    opacity: 0.65,
  },
  lNameInp: {
    backgroundColor: "#FFFFFF",
    width: 156,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    paddingLeft: 5,
  },
  PhoneView: {
    marginTop: 32,
  },
  Gender: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  GenderTxt: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    opacity: 0.65,
  },
  FMView: {
    flexDirection: "row",
  },
  FemaleView: {
    flexDirection: "row",
    alignItems: "center",
    width: 156,
    height: 48,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    borderRadius: 5,
    marginRight: 16,
  },
  FemaleTxt: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    marginLeft: 14,
    marginRight: 59,
  },
  maleView: {
    flexDirection: "row",
    alignItems: "center",
    width: 156,
    height: 48,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    borderRadius: 5,
  },
  maleTxt: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    marginLeft: 14,
    marginRight: 77,
  },
  birthdayView: {
    marginTop: 32,
  },
  birthdayTxt: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#0B3B63A6",
    fontWeight: "500",
    opacity: 0.65,
    marginBottom: 5,
  },
  DMYView: {
    flexDirection: "row",
  },
  DMYInp: {
    width: 99.7,
    height: 48,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    borderRadius: 5,
    paddingLeft: 14,
    color: "#0B3B63",
    paddingLeft: 5,
  },
  dayInpView: {
    width: 99.7,
    height: 48,
    justifyContent: "center",
    marginRight: 14.95,
  },
  monthInpView: {
    marginRight: 13.65,
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
  orView: {
    marginTop: 32,
    alignItems: "center",
  },
  or: {
    width: 328,
    height: 49.51,
  },
  SingUpWithGoogleView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 49.49,
    marginTop: 30,
  },
  touch: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0B3B63",
  },
  GoogleIcon: {
    marginRight: 16,
    width: 16,
    height: 16,
  },
  GoogleText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    textAlign: "center",
    marginVertical: 10,
  },
});
