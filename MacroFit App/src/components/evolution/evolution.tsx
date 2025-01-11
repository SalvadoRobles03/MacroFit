import React from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

const Evolution = () => {

  const tw = useTailwind();
  return (
    <Surface
      style={tw('flex-1 justify-center items-center h-full w-full bg-black')}
    >
      <Text style={tw('text-white text-lg')}>PAGE 3</Text>
    </Surface>
  );
};

export default Evolution;
