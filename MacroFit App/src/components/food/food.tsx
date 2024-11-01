import React from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

const Food = () => {
  return (
    <Surface
      style={tw`flex-1 justify-center items-center h-full w-full bg-black`}
    >
      <Text style={tw`text-white text-lg`}>PAGE 2</Text>
    </Surface>
  );
};

export default Food;
