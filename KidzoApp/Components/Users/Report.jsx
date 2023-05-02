import React, { useState } from "react";
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
import Frame from "../../assets/Report/Frame.png";
import Icon from "../../assets/Report/material-symbols_add-circle-outline-rounded.png";
import {
  addMedicineReport,
  getMedical,
  deleteMedicineReport,
  getMedicineReport,
} from "../../db/medicineReport";
import { getUserUId } from "../../db/firebase/auth";
export default function Report({ navigation }) {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [desc, setDes] = useState("");
  const [currentId, setCurrentId] = useState("");
  const handelId = getUserUId().then((val) => {
    setCurrentId(val);
  });

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.titleView}>
          <View style={styles.frameView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Medical");
              }}
            >
              <Image source={Frame} style={styles.frame} />
            </TouchableOpacity>
          </View>
          <View style={styles.wordView}>
            <Text style={styles.title}>NEW REPORT</Text>
          </View>
        </View>
        <View style={styles.lineView}>
          <Text style={styles.line}> ────────────────────────────────</Text>
        </View>
        <View style={styles.ReportView}>
          <View style={styles.starView}>
            <Text style={styles.inpText}>Report Title {""}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setTitle(val)}
            />
          </View>
        </View>
        <View style={styles.birthdayView}>
          <View style={styles.starView}>
            <Text style={styles.inpText}>Report Date {""}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View style={styles.DMYView}>
            <View style={styles.dayInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Day"
                keyboardType="number-pad"
                onChangeText={(val) => setDay(val)}
              />
            </View>
            <View style={styles.monthInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Month"
                keyboardType="number-pad"
                onChangeText={(val) => setMonth(val)}
              />
            </View>
            <View style={styles.yearInpView}>
              <TextInput
                style={styles.DMYInp}
                placeholder="Year"
                keyboardType="number-pad"
                onChangeText={(val) => setYear(val)}
              />
            </View>
          </View>
        </View>
        <View style={styles.DesView}>
          <Text style={styles.Des}>Add Description</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inp}
              multiline
              scrollEnabled
              onChangeText={(val) => setDes(val)}
            />
          </View>
        </View>
        <View style={styles.iconView}>
          <TouchableOpacity
            onPress={() => {
              let isMonth = /^\d+$/.test(month);
              let isDay = /^\d+$/.test(day);
              let isYear = /^\d+$/.test(year);
              if (
                title.length > 0 &&
                isMonth &&
                month >= 1 &&
                month <= 12 &&
                isYear &&
                year >= 2020 &&
                isDay &&
                day >= 1 &&
                day <= 31
              ) {
                navigation.navigate("TabFun");
                handelId;
                console.log(title, " ", day, " ", month, " ", year, " ", desc);
                addMedicineReport({
                  day: day,
                  description: desc,
                  month: month,
                  title: title,
                  year: year,
                  currentUserid: currentId,
                });
              }
              if (!(title.length > 0)) {
                alert("Title can not be empty");
              } else if (!(isMonth && month >= 1 && month <= 12)) {
                alert("Month should be between 1 - 12");
              } else if (!(isDay && day >= 1 && day <= 31)) {
                alert("Day should be between 1 - 31");
              } else if (!(isYear && year >= 2020)) {
                alert("Year should be greater than 2020");
              } else {
                alert("Done!!");
              }
            }}
          >
            <Image source={Icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.wordsView}>
          <Text style={styles.words}>
            {" "}
            Add pictures for medical prescription{"\n                 "}and
            medical tests
          </Text>
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
    marginHorizontal: 21.37,
    justifyContent: "space-between",
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
  ReportView: {
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
    paddingLeft: 5,
  },
  starView: {
    flexDirection: "row",
  },
  star: {
    color: "#FF0000",
    marginTop: -5,
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
  DesView: {
    marginTop: 32,
  },
  Des: {
    color: "#0B3B63A6",
    marginBottom: 5,
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 14,
    opacity: 0.65,
  },
  inp: {
    backgroundColor: "#ffff",
    borderColor: "#FFA8C5",
    borderWidth: 1,
    width: 328,
    height: 144,
    borderRadius: 5,
    paddingLeft: 5,
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
