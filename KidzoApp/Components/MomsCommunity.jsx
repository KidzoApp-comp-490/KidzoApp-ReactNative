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
import ImageIcon from "../assets/Community/ant-design_picture-outlined.png";
import Heart from "../assets/Community/Frame.png";
import Comment from "../assets/Community/Comment.png";
import PostIcon from "../assets/Profile/image3.png";

export default function MomsCommunity() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Text style={styles.CommunityTxt}>Moms Community</Text>
        <View style={styles.InpView}>
          <TextInput
            style={styles.Inp}
            placeholder="What's in your mind?"
            placeholderTextColor="#FFA8C5"
          />
          <Image source={ImageIcon} style={styles.ImageIcon} />
        </View>
        <View style={styles.PostsView}>
          <Text style={styles.PostTitle}>Happy Mother's Day!</Text>
          <Image source={PostIcon} style={{ width: 328, height: 243 }} />
          <View style={styles.ReactsView}>
            <View style={styles.LeftPart}>
              <Image source={Heart} style={{ width: 24, height: 24 }} />
              <Text style={styles.ReactTxt}>12 Love</Text>
              <View style={styles.VerticalPar}></View>
              <View style={styles.RightPart}>
                <Image source={Comment} style={{ width: 24, height: 24 }} />
                <Text style={styles.CommentTxt}>5 Comments</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.PostsView2}>
          <Text style={styles.PostTitle2}>
            Happy Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy
            Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's
            Day! Happy Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy
            Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's
            Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy
            Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's
            Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy
            Mother's Day!Happy Mother's Day!Happy Mother's Day!Happy Mother's
            Day!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  CommunityTxt: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    marginTop: 77,
    marginRight: 180,
    textAlign: "center",
  },
  InpView: {
    marginTop: 33,
    flexDirection: "row",
    width: 328,
    height: 32,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFA8C5",
    alignItems: "center",
  },
  Inp: {
    width: 300,
    height: 32,
    borderRadius: 30,
    paddingLeft: 16,
  },
  ImageIcon: {
    width: 14,
    height: 14,
    marginRight: 18,
  },
  PostsView: {
    width: 370,
    height: 360,
    borderRadius: 15,
    borderColor: "rgba(11, 59, 99, 0.15)",
    borderWidth: 1,
    marginTop: 16,
    alignItems: "center",
  },
  PostTitle: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    marginTop: 17,
    marginBottom: 16,
    marginRight: 200,
  },
  ReactsView: {
    width: 370,
    height: 48,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 16,
    borderColor: "rgba(11, 59, 99, 0.15)",
    justifyContent: "center",
  },
  LeftPart: {
    flexDirection: "row",
    marginLeft: 16,
    alignItems: "center",
  },
  ReactTxt: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#FFA8C5",
    marginLeft: 5,
  },
  VerticalPar: {
    width: 1,
    height: 47,
    backgroundColor: "rgba(11, 59, 99, 0.15)",
    marginLeft: 84,
  },
  RightPart: {
    flexDirection: "row",
    marginLeft: 19.7,
    alignItems: "center",
  },
  CommentTxt: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#FFA8C5",
    marginLeft: 5,
  },
  PostsView2: {
    width: 370,
    borderRadius: 15,
    borderColor: "rgba(11, 59, 99, 0.15)",
    borderWidth: 1,
    marginTop: 16,
    alignItems: "center",
    marginBottom: 100,
  },
  PostTitle2: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#0B3B63",
    marginTop: 17,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
