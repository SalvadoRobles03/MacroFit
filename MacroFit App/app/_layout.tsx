import * as NavigationBar from "expo-navigation-bar";
import React, { Suspense, useEffect } from "react";
import { TailwindProvider } from "tailwind-rn";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import utilities from "../tailwind.json";
import TabNavigator from "./TabNavigator";
import { SQLiteProvider } from "expo-sqlite";

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  const darkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "black",
      surface: "black",
      text: "white",
      primary: "white",
      accent: "white",
    },
  };

  return (
    <SQLiteProvider databaseName="macrofit.db" useSuspense>
      <TailwindProvider utilities={utilities} colorScheme="dark">
        <PaperProvider theme={darkTheme}>
          <TabNavigator />
        </PaperProvider>
      </TailwindProvider>
    </SQLiteProvider>
  );
}
