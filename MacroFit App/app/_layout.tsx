import React from "react";
import { TailwindProvider } from "tailwind-rn";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import utilities from "../tailwind.json";
import { TabNavigator } from "./TabNavigator";


export default function RootLayout() {

  const darkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'black',
      surface: 'black',
      text: 'white',
      primary: 'white',
      accent: 'white',
    },
  };

  return (
    <TailwindProvider utilities={utilities} colorScheme="dark">
      <PaperProvider theme={darkTheme}>
        <TabNavigator />
      </PaperProvider>
    </TailwindProvider>
  );
}