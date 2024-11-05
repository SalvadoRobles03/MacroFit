import React from "react";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import NavBarButton from "./navbar-button";

const NavBar = ({
  buttons,
}: {
  buttons: Array<{ iconName: string; text: string; onPress: () => void }>;
}) => {
  return (
    <Surface
      style={tw`bg-gray-600 h-fit w-full flex flex-row justify-between items-center`}
    >
      {buttons.map((button, index) => (
        <NavBarButton
          key={index}
          iconName={button.iconName}
          text={button.text}
          onPress={button.onPress}
        />
      ))}
    </Surface>
  );
};

export default NavBar;
