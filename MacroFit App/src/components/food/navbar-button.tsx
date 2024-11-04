import React from "react";
import {Button, Text } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";


const NavBarButton = ({iconName, text}: {iconName: string, text: string}) => {
  return (
    <div
    >
      <Button onPress={() => console.log("Pressed")} style={tw``}>
        <div style={tw`flex flex-col`}>
          <MaterialIcons
            name={iconName}
            size={30}
            color={"white"}
          />
          <Text style={tw`text-white pt-2`}>{text}</Text>
        </div>
      </Button>
    </div>
  );

};
export default NavBarButton;
