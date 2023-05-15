import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import logo from "../../assets/Post/ant-design_picture-outlined.png";
import { getUserUId } from "../../db/firebase/auth";
import { getUserById, subscribe } from "../../db/firebase/users";
export default function MomsComCreatepost(navigation) {
  const [firstname, SetFName] = useState("");
  const [lastname, SetLName] = useState("");
  const [image, setImage] = useState("");
  const [value, onChangeText] = useState("");
  React.useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getUserUId().then((id) => {
        console.log(id);
        getUserById(id).then((user) => {
          SetFName(user[0].fName);
          SetLName(user[0].lName);
          setImage(user[0].image);
        });
      });
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ borderRadius: 100, overflow: "hidden" }}>
            <Image source={{ uri: image }} style={{ width: 35, height: 35 }} />
          </View>
          <Text style={styles.UserName}>
            {firstname} {lastname}
          </Text>
          <Image
            source={logo}
            style={{ width: 35, height: 35, marginLeft: 90 }}
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 300,
              borderColor: "#ffff",
              borderRadius: 10,
              marginTop: 20,
              placeholder: "Type your message here",
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            multiline={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  header: {
    flexDirection: "row",
  },
  UserName: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    marginLeft: 25,
    marginRight: 29.75,
    marginTop: 8,
  },
});
