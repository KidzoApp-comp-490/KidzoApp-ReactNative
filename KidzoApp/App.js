import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SignIn from "./Components/Users/SignIn";
import SignUp from "./Components/Users/SignUp";
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
import ResetPass from "./Components/Users/ResetPass";
import MedicalItem from "./Components/Medical/MedicalItem";
import Report from "./Components/Users/Report";
import Info from "./Components/Users/Info";
import ProfileSettings from "./Components/Users/ProfileSettings";
import MomsCommunityItem from "./Components/Community/MomsCommunityItem";
import GoogleInfo from "./Components/Users/GoogleInfo";
import SignupAs from "./Components/Users/SignupAs";
import SignUpDoctor from "./Components/Users/SignUpDoctor";
import Changepass from "./Components/Users/Changepass";
import Doctors from "./Components/Doctors/Doctors";
import ChatWithDoc from "./Components/Chat/ChatWithDoc";
import Expertdetails from "./Components/Doctors/Expertdetails";
import Doctorsettings from "./Components/Doctors/Doctorsettings";
import OnboardingFlow from "./Components/Users/OnboardingFlow";
import { NetworkStatus } from "./Components/NetworkStatus";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function TabFun() {
  return (
    <NetworkStatus>
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
          component={MomsCommunityItem}
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
    </NetworkStatus>
  );
}

export default function App() {
  return (
    <NetworkStatus>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="First">
          <Stack.Screen
            name="First"
            component={First}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingFlow"
            component={OnboardingFlow}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SignupAs"
            component={SignupAs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpDoctor"
            component={SignUpDoctor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Medical"
            component={MedicalItem}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Report"
            component={Report}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GoogleInfo"
            component={GoogleInfo}
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
          <Stack.Screen
            name="ResetPass"
            component={ResetPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileSettings"
            component={ProfileSettings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Changepass"
            component={Changepass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Doctors"
            component={Doctors}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatWithDoc"
            component={ChatWithDoc}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Expertdetails"
            component={Expertdetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Doctorsettings"
            component={Doctorsettings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkStatus>
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
