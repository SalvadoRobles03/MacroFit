import React from "react";
import { Surface } from "react-native-paper";
import NavBarButton from "./navbar-button";
import { useTailwind } from "tailwind-rn";

const NavBar = ({
  buttons,
}: {
  buttons: Array<{ iconName: string; text: string; onPress: () => void }>;
  }) => {
  const tw = useTailwind();
  return (
    <Surface
      style={tw('bg-gray-600 h-fit w-full flex flex-row justify-between items-center')}
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
