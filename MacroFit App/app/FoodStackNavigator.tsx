import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FoodPage from "../src/pages/food/food-page";
import OpenFoodPage from "../src/pages/food/open-food-page";
import AddFoodPage from "@/src/pages/food/add-food-page";
import InitialFoodPage from "@/src/pages/food/initial-food-page";
import NewMacrosPage from "@/src/pages/macros/new-macros-page";
import { ProfileContext } from "@/src/Auth/ProfileContext";
import useActualMacros from "@/src/hooks/useActualMacros";

const Stack = createStackNavigator();

export default function FoodStackNavigator() {
  const { profile } = useContext(ProfileContext);
  const actualMacros = useActualMacros(profile); 

  return (
    <Stack.Navigator initialRouteName={actualMacros ? "Food" : "NewMacros"}>
      <Stack.Screen
        name="Food"
        component={FoodPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OpenFood"
        component={OpenFoodPage}
        options={{
          headerShown: true,
          title: "",
          headerTintColor: "white", // Color del back button
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Stack.Screen
        name="AddFood"
        component={AddFoodPage}
        options={{
          headerShown: true,
          title: "",
          headerTintColor: "white", // Color del back button
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Stack.Screen
        name="InitialFood"
        component={InitialFoodPage}
        options={{
          headerShown: false,
          title: "",
          headerTintColor: "white", // Color del back button
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Stack.Screen
        name="NewMacros"
        component={NewMacrosPage}
        options={{
          headerShown: false,
          title: "",
          headerTintColor: "white", // Color del back button
          headerStyle: { backgroundColor: "black" },
        }}
      />
    </Stack.Navigator>
  );
}
