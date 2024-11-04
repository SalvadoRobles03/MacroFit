import React from "react";
import { Surface, Button, Text } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import NavBarButton from "./navbar-button";

const NavBar = () => {
  return (
    <Surface
      style={tw`bg-gray-600 h-fit w-full flex flex-row justify-between items-center`}
    >
      <NavBarButton iconName={"admin-panel-settings"} text={"Admin"} />
      <NavBarButton iconName={"calendar-month"} text={"Calendar"} />
      <NavBarButton iconName={"delete"} text={"Clear"} />
    </Surface>
  );
};

export default NavBar;
