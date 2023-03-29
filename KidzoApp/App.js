import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SingIn from "./Components/Users/SignIn";
import SingUp from "./Components/Users/SingUp";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPass from "./Components/Users/ForgetPass";
import Confirm from "./Components/Users/Confirm";
import First from "./Components/First";
import Home from "./Components/Home";
import HomeIcon from "./assets/Home/menu.png";
import ProfileIcon from "./assets/Home/Frame.png";
import CommunityIcon from "./assets/Home/comm.png";
import SettingIcon from "./assets/Home/Settings.png";
import Profile from "./Components/Users/Profile";
import Settings from "./Components/Users/Settings";
import MomsCommunity from "./Components/MomsCommunity";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function TabFun() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarActiveTintColor: "#FFA8C5",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Image style={styles.TabIcon} source={HomeIcon} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image style={styles.TabIcon} source={ProfileIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="MoMS"
        component={MomsCommunity}
        options={{
          tabBarIcon: () => (
            <Image style={styles.TabIcon} source={CommunityIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Image style={styles.TabIcon} source={SettingIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingIn">
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingIn"
          component={SingIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabFun"
          component={TabFun}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: "90%",
    height: 52,
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal: 25,
    position: "absolute",
  },

  TabIcon: {
    width: 32,
    height: 32,
  },
});
