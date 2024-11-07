import React from "react";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import ProgressGraphs from "./progress-graphs";
import NavBar from "../shared/navbar/navbar";
import CalendarControl from "../shared/calendar/calendar-control";
import { foodPageNavButtons } from "./food-page-nav-buttons";

const MainFoodPage = () => {
  return (
    <Surface style={tw`h-full w-full bg-black`}>
      <NavBar buttons={foodPageNavButtons} />
      <CalendarControl />
      <ProgressGraphs
        actualCalories={2005}
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
