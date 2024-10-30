import React from "react";
import { Tabs } from "expo-router";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";

//https://mui.com/material-ui/material-icons/?query=gra

type IconNames = "home" | "timeline" | "question-mark";

const iconMap: Record<string, IconNames> = {
  index: "home",
  "evolution-page": "timeline",
};
const getIconName = (routeName: keyof typeof iconMap): IconNames => {
  return iconMap[routeName] || "question-mark";
};

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name);
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: tw`bg-white`,
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
    </Tabs>
  );
}
