import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Frame from "../../assets/MedicalH/Frame.png";
import Icon from "../../assets/MedicalH/material-symbols_add-circle-outline-rounded.png";
import Medical from "./Medical";

export default function MedicalItem({ navigation }) {
  const arrOfObjects = [
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
    { text1: "Cold and flue", day: 10, month: "mar", year: 2023 },
  ];
  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.titleView}>
          <View style={styles.frameView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TabFun");
              }}
            >
              <Image source={Frame} style={styles.frame} />
            </TouchableOpacity>
          </View>
          <View style={styles.wordView}>
            <Text style={styles.title}>Medical History</Text>
          </View>
        </View>
        <View style={styles.lineView}>
          <Text style={styles.line}> ────────────────────────────────</Text>
        </View>
        <View style={styles.iconView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Report");
            }}
          >
            <Image source={Icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.wordsView}>
          <Text style={styles.words}>
            {" "}
            Add new medical reprt{"\n         "}for your child
          </Text>
        </View>
        {arrOfObjects.map((e, index) => (
          <Medical
            text1={e.text1}
            day={e.day}
            month={e.month}
            year={e.year}
            key={index}
          />
        ))}
        <View style={{ marginBottom: 50 }}></View>
      </ScrollView>
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
  frameView: {
    marginTop: 75,
  },
  frame: {
    width: 24,
    height: 20,
  },
  titleView: {
    flexDirection: "row",
  },
  title: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 18,
  },
  wordView: {
    marginTop: 77,
    marginRight: 127,
    marginLeft: 21.37,
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
  iconView: {
    marginTop: 36,
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  wordsView: {
    alignItems: "center",
  },
  words: {
    color: "#0B3B63",
    opacity: 0.65,
    fontFamily: "Montserrat",
    fontWeight: 300,
    fontSize: 14,
  },
});
