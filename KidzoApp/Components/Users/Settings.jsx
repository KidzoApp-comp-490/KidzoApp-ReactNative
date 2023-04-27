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
import Iconset from "../../assets/Home/Settings.png";
import { SignOut } from "../../db/firebase/auth";

export default function Settings({ navigation }) {
  return (
    <View style={styles.body}>
      <View style={styles.wordView}>
        <Text style={styles.word}>SETTINGS</Text>
      </View>
      <View style={styles.lineView}>
        <Text style={styles.line}> ────────────────────────────────</Text>
      </View>
      <View style={styles.textView}>
        <View style={styles.iconView}>
          <Image source={Iconset} style={styles.icon} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileSettings");
          }}
        >
          <Text style={styles.text}>Edit your profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textView2}>
        <View style={styles.iconView2}>
          <Image source={Iconset} style={styles.icon2} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Changepass");
          }}
        >
          <Text style={styles.text}>Change your password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textView3}>
        <View style={styles.iconView3}>
          <Image source={Iconset} style={styles.icon3} />
        </View>
        <TouchableOpacity
          style={styles.square}
          onPress={() => {
            SignOut().then(() => {
              console.log("sign out");
              navigation.navigate("SignIn");
              alert("You signed out");
            });
          }}
        >
          <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffff",
  },
  wordView: {
    marginTop: 77,
    marginRight: 252,
    marginLeft: 16,
  },
  word: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 18,
    width: 92,
    height: 22,
  },
  lineView: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  line: {
    color: "#FFA8C5",
    opacity: 0.5,
  },
  textView: {
    marginTop: 70,
    marginRight: 161,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 17,
  },
  text: {
    color: "#FFA8C5",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 16,
  },
  iconView: {
    marginRight: 17.67,
    marginLeft: 24.33,
  },
  icon: {
    width: 22,
    height: 28.67,
  },
  textView2: {
    marginTop: 60,
    marginRight: 120,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 17,
  },

  iconView2: {
    marginRight: 17.67,
    marginLeft: 24.33,
  },
  icon2: {
    width: 22,
    height: 28.67,
  },
  textView3: {
    marginTop: 60,
    marginRight: 220,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 17,
  },

  iconView3: {
    marginRight: 17.67,
    marginLeft: 24.33,
  },
  icon3: {
    width: 22,
    height: 28.67,
  },
});
