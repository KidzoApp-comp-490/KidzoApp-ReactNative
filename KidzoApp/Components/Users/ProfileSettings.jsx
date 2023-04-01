import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackIcon from "../../assets/Profile/Back.png";
import ImageIcon from "../../assets/Profile/Group69.png";

export default function ProfileSettings({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.Section1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TabFun");
            }}
          >
            <Image
              source={BackIcon}
              style={{ width: 25, height: 25, marginRight: 21.37 }}
            />
          </TouchableOpacity>

          <Text style={styles.ProfileTxt}>EDIT PROFILE</Text>
        </View>
        <View style={styles.UserImageView}>
          <Image source={ImageIcon} style={{ width: 168, height: 168 }} />
          <Text style={styles.ImageText}>Edit your profile picture</Text>
        </View>
        <View style={styles.InputView}>
          <Text style={styles.InputTxt}>Name</Text>
          <TextInput style={styles.Input} />
        </View>
        <View style={styles.InputView2}>
          <Text style={styles.InputTxt}>Email</Text>
          <TextInput style={styles.Input} />
        </View>
        <View style={styles.InputView2}>
          <Text style={styles.InputTxt}>Phon number</Text>
          <TextInput style={styles.Input} />
        </View>
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Section1: {
    flexDirection: "row",
    marginTop: 79,
    alignItems: "center",
    marginRight: 160,
  },
  ProfileTxt: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#0B3B63",
  },
  UserImageView: {
    marginTop: 34,
    alignItems: "center",
  },
  ImageText: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#FFA8C5",
    textDecorationLine: "underline",
    marginTop: 16,
  },
  InputView: {
    marginTop: 51,
  },
  InputTxt: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
  },
  Input: {
    width: 326,
    height: 48,
    borderBottomWidth: 1,
    borderColor: "#FFA8C5",
  },
  InputView2: {
    marginTop: 32,
  },
});
