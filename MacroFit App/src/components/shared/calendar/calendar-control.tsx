import React from "react";
import { Button, Surface, Text } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";

const CalendarControl = () => {
  return (
    <div
      style={tw`bg-transparent w-full flex flex-row justify-between items-center mt-2`}
    >
      <Button style={tw``}>
        <MaterialIcons name={"keyboard-arrow-left"} size={30} color={"white"} />
      </Button>
      <Button>
        <Text style={tw`text-white text-3xl`}>Today</Text>
      </Button>
      <Button style={tw``}>
        <MaterialIcons
          name={"keyboard-arrow-right"}
          size={30}
          color={"white"}
        />
      </Button>
    </div>
  );
};

export default CalendarControl;
