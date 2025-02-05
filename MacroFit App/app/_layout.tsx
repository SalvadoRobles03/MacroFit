import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect } from "react";
import { TailwindProvider } from "tailwind-rn";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import utilities from "../tailwind.json";
import TabNavigator from "./TabNavigator";
import { SQLiteProvider } from "expo-sqlite";
import { ProfileProvider } from "@/src/Auth/ProfileContext";
import { getDBConnection } from "@/src/db-services/db-service";

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    const initializeDB = async () => {
      await getDBConnection();
    };

    initializeDB();
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
    <ProfileProvider>
      <SQLiteProvider databaseName="macrofit.db">
        <TailwindProvider utilities={utilities} colorScheme="dark">
          <PaperProvider theme={darkTheme}>
            <TabNavigator />
          </PaperProvider>
        </TailwindProvider>
      </SQLiteProvider>
    </ProfileProvider>
  );
}
