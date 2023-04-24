import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Imagem from "../../assets/MedicalH/material-symbols_edit-rounded.png";

export default function Medical({ text1, day, month, year }) {
  return (
    <View style={styles.body}>
      <View style={styles.bordView}>
        <Text style={styles.statment1}> {text1}</Text>
        <Text style={styles.statment2}>
          {day}-{month}-{year}
        </Text>
        <View style={styles.imageView}>
          <TouchableOpacity>
            <Image source={Imagem} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  image: {
    width: 12.18,
    height: 12.17,
    marginRight: 18,
  },
});
