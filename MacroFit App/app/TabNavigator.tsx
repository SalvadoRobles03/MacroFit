import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";

type IconNames = "home" | "timeline" | "question-mark" | "egg";

const iconMap: Record<string, IconNames> = {
  index: "home",
  "evolution-page": "timeline",
  "food-page": "egg",
};

const getIconName = (routeName: keyof typeof iconMap): IconNames => {
  return iconMap[routeName] || "question-mark";
};

export function TabNavigator() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex-1 bg-black")}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = getIconName(route.name);
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { borderTopWidth: 0, backgroundColor: "black" },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tabs.Screen
          name="evolution-page"
          options={{
            headerShown: false,
            tabBarLabel: "Evolution",
          }}
        />
        <Tabs.Screen
          name="food-page"
          options={{
            headerShown: false,
            tabBarLabel: "Food",
          }}
        />
      </Tabs>
    </View>
  );
}
