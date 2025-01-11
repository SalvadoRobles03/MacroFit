import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FoodPage from "../src/pages/food/food-page";
import OpenFoodPage from "../src/pages/food/open-food-page";
import AddFoodPage from "@/src/pages/food/add-food-page";

const Stack = createStackNavigator();

export default function FoodStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Food">
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
    </Stack.Navigator>
  );
}
