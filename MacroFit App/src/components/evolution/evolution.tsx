import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import { ProfileContext } from "@/src/Auth/ProfileContext";

const Evolution = () => {

  const tw = useTailwind();
  const { profile } = useContext(ProfileContext);
  return (
    <Surface
      style={tw('flex-1 justify-center items-center h-full w-full bg-black')}
    >
      <Text style={tw('text-white text-lg')}>{profile.name}</Text>
    </Surface>
  );
};

export default Evolution;
