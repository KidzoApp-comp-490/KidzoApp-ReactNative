import React, { useState } from "react";
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

export default function SignUp({ navigation }) {
  const [checked, setChecked] = useState("first");
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
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>
        </View>
        <View style={styles.PassView}>
          <Text style={styles.inpText}>Password</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.flNameView}>
          <View style={styles.fNameView}>
            <Text style={styles.fName}>First name</Text>
            <View style={styles.fNameInpView}>
              <TextInput style={styles.fNameInp} />
            </View>
          </View>
          <View style={styles.lNameView}>
            <Text style={styles.lName}>Last name</Text>
            <View style={styles.lNameInpView}>
              <TextInput style={styles.lNameInp} />
            </View>
          </View>
        </View>
        <View style={styles.PhoneView}>
          <Text style={styles.inpText}>Phone number</Text>
          <View style={styles.inpView}>
            <TextInput style={styles.input} keyboardType="number-pad" />
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
                onPress={() => setChecked("first")}
                color="#FFA8C5"
                uncheckedColor="#FFA8C5"
              />
            </View>
            <View style={styles.maleView}>
              <Text style={styles.maleTxt}>Male</Text>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
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
              />
            </View>
            <View style={styles.monthInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Month"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.yearInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Year"
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>
        <View style={styles.orView}>
          <Image source={OR} style={styles.or} />
        </View>
        <View style={styles.SingUpWithGoogleView}>
          <TouchableOpacity style={styles.touch}>
            <Image source={Google} style={styles.GoogleIcon} />
            <Text style={styles.GoogleText}>SingUp with Google</Text>
          </TouchableOpacity>
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
  },
  PassView: {
    marginTop: 32,
  },
  flNameView: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 32,
  },
  // fNameView: {
  //   width: "48%",
  // },
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
    // padding: 5,
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
    // padding: 5,
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
  orView: {
    marginTop: 32,
    alignItems: "center",
    // marginHorizontal: 16,
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

// import React from "react";
// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// // import Logo from "../../assets/SignUp/Kidzo.png";
// // import Back from "../../assets/SignUp/Back.png";
// // import EmailIcon from "../../assets/SignUp/mdi_email-alert.png";
// // import PassIcon from "../../assets/SignUp/Frame.png";
// // import Name from "../../assets/SignUp/name.png";
// // import Phone from "../../assets/SignUp/phone.png";
// // import Gender from "../../assets/SignUp/gender.png";
// // import Day from "../../assets/SignUp/day.png";
// // import Month from "../../assets/SignUp/month.png";
// // import Year from "../../assets/SignUp/year.png";
// // import Google from "../../assets/SignUp/logos_google-icon.png";

// export default function SingUp({ navigation }) {
//   return (
//     // <ImageBackground source={Back} resizeMode="cover" style={styles.background}>
//     <ScrollView
//       contentContainerStyle={{ flex: 1, width: "100%", height: "100%" }}
//     >
//       <View style={styles.logoView}>
//         {/* <Image source={Logo} style={styles.logo} /> */}
//       </View>
//       <View style={styles.body}>
//         <View style={styles.square}>
//           <View style={styles.signUpTextView}>
//             <Text style={styles.signUpText}>
//               Sign Up{"\n"}
//               <Text style={styles.accountText}>Already have account? </Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate("SingIn");
//                 }}
//               >
//                 <Text style={styles.signInText}>Sign In</Text>
//               </TouchableOpacity>
//             </Text>
//           </View>
//           <View style={styles.emailView}>
//             <Text style={styles.inpText}>E-mail</Text>
//             <View style={styles.inpView}>
//               {/* <Image source={EmailIcon} style={styles.emailIcon} /> */}
//               <TextInput style={styles.input} />
//             </View>
//           </View>
//           <View style={styles.passView}>
//             <Text style={styles.inpText}>Password</Text>
//             <View style={styles.inpView}>
//               {/* <Image source={PassIcon} style={styles.passIcon} /> */}
//               <TextInput style={styles.input} />
//             </View>
//           </View>
//           <View style={styles.flNameView}>
//             <View style={styles.fNameView}>
//               <Text style={styles.fName}>First name</Text>
//               <View style={styles.fNameInpView}>
//                 {/* <Image source={Name} style={styles.fNameIcon} /> */}
//                 <TextInput style={styles.fNameInp} />
//               </View>
//             </View>
//             <View style={styles.lNameView}>
//               <Text style={styles.lName}>Last name</Text>
//               <View style={styles.lNameInpView}>
//                 {/* <Image source={Name} style={styles.lNameIcon} /> */}
//                 <TextInput style={styles.lNameInp} />
//               </View>
//             </View>
//           </View>
//           <View style={styles.phoneView}>
//             <Text style={styles.inpText}>Phone number</Text>
//             <View style={styles.inpView}>
//               {/* <Image source={Phone} style={styles.passIcon} /> */}
//               <TextInput style={styles.input} />
//             </View>
//           </View>
//           <View style={styles.genderView}>
//             <Text style={styles.inpText}>Gender</Text>
//             <View style={styles.inpView}>
//               {/* <Image source={Gender} style={styles.passIcon} /> */}
//               <TextInput style={styles.input} />
//             </View>
//           </View>
//           <View style={styles.birthdayView}>
//             <View style={styles.dayView}>
//               <Text style={styles.birthday}>Birthday</Text>
//               <View style={styles.dayMonthView}>
//                 <View style={styles.DMYInpView}>
//                   {/* <Image source={Day} style={styles.DMYIcon} /> */}
//                   <TextInput style={styles.DMYInp} />
//                 </View>
//                 <View style={styles.DMYInpView}>
//                   {/* <Image source={Month} style={styles.DMYIcon} /> */}
//                   <TextInput style={styles.DMYInp} />
//                 </View>
//                 <View style={styles.DMYInpView}>
//                   {/* <Image source={Year} style={styles.DMYIcon} /> */}
//                   <TextInput style={styles.DMYInp} />
//                 </View>
//               </View>
//             </View>
//           </View>
//           <Text style={styles.orText}>
//             {"                                        "}
//             <Text> Or </Text>
//             {"                                        "}
//           </Text>
//           <View style={styles.SingUpWithGoogleView}>
//             <TouchableOpacity style={styles.touch}>
//               {/* <Image source={Google} style={styles.GoogleIcon} /> */}
//               <Text style={styles.GoogleText}>SingUp with Google</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <StatusBar style="auto" />
//     </ScrollView>
//     // </ImageBackground>
//   );
// }
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoView: {
//     alignItems: "center",
//     marginTop: 40,
//   },
//   logo: {
//     width: 210,
//     height: 60,
//   },
//   body: {
//     backgroundColor: "pink",
//     // justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     // marginTop: 40,
//   },
//   square: {
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     width: "92%",
//     height: "100%",
//     borderRadius: 15,
//     paddingBottom: 20,
//   },
//   signUpTextView: {
//     marginTop: 15,
//   },
//   signUpText: {
//     fontSize: 18,
//     fontWeight: "500",
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     textAlign: "center",
//   },
//   accountText: {
//     fontSize: 18,
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     textAlign: "center",
//     opacity: 0.5,
//   },
//   signInText: {
//     fontSize: 18,
//     fontWeight: "500",
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     textDecorationLine: "underline",
//   },
//   inpText: {
//     marginHorizontal: 25,
//     marginTop: 10,
//     fontSize: 14,
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     fontWeight: "400",
//     opacity: 0.5,
//   },
//   inpView: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginTop: 5,
//     marginHorizontal: 20,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   input: {
//     backgroundColor: "#fff",
//     padding: 13,
//     borderRadius: 5,
//     width: "93%",
//   },
//   emailIcon: {
//     width: 16,
//     height: 10.67,
//     marginLeft: 10,
//   },
//   passIcon: {
//     width: 16,
//     height: 16,
//     marginLeft: 10,
//   },
//   flNameView: {
//     flexDirection: "row",
//     marginHorizontal: 20,
//   },
//   fNameView: {
//     width: "48%",
//   },
//   fName: {
//     marginTop: 10,
//     fontSize: 14,
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     fontWeight: "400",
//     opacity: 0.5,
//   },
//   fNameInpView: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginTop: 5,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   fNameIcon: {
//     width: 16,
//     height: 16,
//     marginHorizontal: 10,
//   },
//   fNameInp: {
//     backgroundColor: "#fff",
//     padding: 13,
//     borderRadius: 5,
//     width: "75%",
//   },
//   lNameView: {
//     width: "48%",
//   },
//   lName: {
//     marginHorizontal: 10,
//     marginTop: 10,
//     fontSize: 14,
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     fontWeight: "400",
//     opacity: 0.5,
//   },
//   lNameInpView: {
//     marginLeft: 10,
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginTop: 5,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   lNameIcon: {
//     width: 16,
//     height: 16,
//     marginHorizontal: 10,
//   },
//   lNameInp: {
//     backgroundColor: "#fff",
//     padding: 13,
//     borderRadius: 5,
//     width: "88%",
//   },
//   birthdayView: {
//     flexDirection: "row",
//     marginHorizontal: 20,
//   },
//   birthday: {
//     marginTop: 10,
//     fontSize: 14,
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     fontWeight: "400",
//     opacity: 0.5,
//   },
//   dayMonthView: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginTop: 5,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "99%",
//   },
//   DMYInpView: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "35%",
//   },
//   DMYIcon: {
//     width: 16,
//     height: 16,
//     marginLeft: 10,
//   },
//   DMYInp: {
//     backgroundColor: "#fff",
//     padding: 13,
//     borderRadius: 5,
//     width: "60%",
//   },
//   orText: {
//     textDecorationLine: "underline",
//     fontSize: 14,
//     fontWeight: "500",
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   SingUpWithGoogleView: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: "6%",
//     paddingBottom: 2,
//   },
//   touch: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "90%",
//     height: "100%",
//     borderRadius: 5,
//   },
//   GoogleIcon: {
//     marginHorizontal: 10,
//     width: 16,
//     height: 16,
//   },
//   GoogleText: {
//     fontSize: 14,
//     fontWeight: "500",
//     fontFamily: "Montserrat",
//     color: "#9374B7",
//     textAlign: "center",
//     marginVertical: 10,
//   },
// });
