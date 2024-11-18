import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";
import { TabNavigator } from "./TabNavigator";

export default function RootLayout() {
  return (
    <TailwindProvider utilities={utilities} colorScheme="dark">
      <TabNavigator />
    </TailwindProvider>
  );
}
