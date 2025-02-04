// TabNavigator.js
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../src/pages/home/home-page";
import EvolutionPage from "../src/pages/evolution/evolution-page";
import FoodStackNavigator from "./FoodStackNavigator";
import CreateProfileScreen from "../src/pages/profile/CreateProfileScreen";
import SelectProfileScreen from "../src/pages/profile/SelectProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileContext } from "../src/Auth/ProfileContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black", borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Evolution"
        component={EvolutionPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="timeline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="CreateProfile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
      <Stack.Screen name="SelectProfile" component={SelectProfileScreen} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  const context = useContext(ProfileContext);
  const profile = context?.profile;

  return (
    <NavigationContainer>
      {profile ? <MainTabNavigator /> : <ProfileStackNavigator />}
    </NavigationContainer>
  );
}
