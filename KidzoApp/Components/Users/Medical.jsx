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
import Frame from "../../assets/MedicalH/Frame.png";
import Icon from "../../assets/MedicalH/material-symbols_add-circle-outline-rounded.png";
import Imagem from "../../assets/MedicalH/material-symbols_edit-rounded.png";
export default function Medical({ navigation }) {
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
            <Text style={styles.title}>MEDICAL HISTORY</Text>
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
        <View style={styles.bordView}>
          <Text style={styles.statment1}> codeandflue</Text>
          <Text style={styles.statment2}> 13Mar.,2023</Text>
          <View style={styles.imageView}>
            <TouchableOpacity>
              <Image source={Imagem} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bordView}>
          <Text style={styles.statment1}> Smallpox</Text>
          <Text style={styles.statment2}> 1 Jun.,2023</Text>
          <View style={styles.imageView}>
            <TouchableOpacity>
              <Image source={Imagem} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bordView}>
          <Text style={styles.statment1}> Insect allergy</Text>
          <Text style={styles.statment2}> 25 Feb.,2023</Text>
          <View style={styles.imageView}>
            <TouchableOpacity>
              <Image source={Imagem} style={styles.image} />
            </TouchableOpacity>
          </View>
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
  bordView: {
    marginTop: 32,
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
    borderColor: "#FFA8C5",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  statment1: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 21,
  },
  statment2: {
    color: "#0B3B63",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 16,
  },
  imageView: {},
  image: {
    width: 12.18,
    height: 12.17,
    marginRight: 18,
  },
});
