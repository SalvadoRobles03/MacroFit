import React from "react";
import { View } from "react-native";
import EvolutionPage from "@/src/pages/evolution/evolution-page";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EvolutionPage />
    </View>
  );
}
