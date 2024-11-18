import React from "react";
import { Button, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const NavBarButton = ({
  iconName,
  text,
  onPress,
}: {
  iconName: string;
  text: string;
  onPress: () => void;
  }) => {
  const tw = useTailwind();
  return (
    <View>
      <Button onPress={onPress} style={tw('')}>
        <View style={tw('flex flex-col')}>
          <MaterialIcons name={iconName} size={30} color={"white"} />
          <Text style={tw('text-white pt-2')}>{text}</Text>
        </View>
      </Button>
    </View>
  );
};

export default NavBarButton;
