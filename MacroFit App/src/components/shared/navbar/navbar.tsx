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
      style={tw('bg-black w-full flex-row justify-between items-center')}
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
