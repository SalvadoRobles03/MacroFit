import React from "react";
import { Button, Surface, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const CalendarControl = () => {
  const tw = useTailwind();
  return (
    <View
      style={tw('bg-transparent w-full flex flex-row justify-between items-center mt-2')}
    >
      <Button style={tw('')}>
        <MaterialIcons name={"keyboard-arrow-left"} size={30} color={"white"} />
      </Button>
      <Button>
        <Text style={tw('text-white text-3xl')}>Today</Text>
      </Button>
      <Button style={tw('')}>
        <MaterialIcons
          name={"keyboard-arrow-right"}
          size={30}
          color={"white"}
        />
      </Button>
    </View>
  );
};

export default CalendarControl;
