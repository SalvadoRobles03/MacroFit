import React from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import CircularProgress from 'react-native-circular-progress-indicator';

//https://reactscript.com/circular-progress-indicator/

const Food = () => {
  return (
    <Surface
      style={tw`flex-1 justify-center items-center h-full w-full bg-black`}
    >
      <CircularProgress value={60} />
    </Surface>
  );
};

export default Food;
