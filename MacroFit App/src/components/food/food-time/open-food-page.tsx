import React from "react";
import { Surface } from "react-native-paper";
import { ScrollView,Text } from "react-native";
import { useTailwind } from "tailwind-rn";


const OpenFoodPage = () => {
  const tw = useTailwind();
  return (
    <Surface style={tw("h-full w-full bg-black items-center")}>
      <Text>Open Food Page</Text> 
    </Surface>
  );
};

export default OpenFoodPage;
