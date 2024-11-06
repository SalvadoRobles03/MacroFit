import React from "react";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import ProgressGraphs from "./progress-graphs";
import NavBar from "../shared/navbar/navbar";
import CalendarControl from "../shared/calendar/calendar-control";
const MainFoodPage = () => {
  const navButtons = [
    {
      iconName: "admin-panel-settings",
      text: "Admin",
      onPress: () => console.log("Admin pressed"),
    },
    {
      iconName: "calendar-month",
      text: "Calendar",
      onPress: () => console.log("Calendar pressed"),
    },
    {
      iconName: "replay",
      text: "Reload",
      onPress: () => console.log("Reload pressed"),
    },
    {
      iconName: "delete",
      text: "Clear",
      onPress: () => prueba(),
    },
  ];

  function prueba(){
    console.log("prueba");
  }

  

  return (
    <Surface style={tw`h-full w-full bg-black`}>
      <NavBar buttons={navButtons} />
      <CalendarControl/>
      <ProgressGraphs
        actualCalories={450}
        totalCalories={2000}
        actualProtein={70}
        totalProtein={130}
        actualCarbs={100}
        totalCarbs={180}
        actualFat={45}
        totalFat={80}
      />
    </Surface>
  );
};

export default MainFoodPage;
