import React from "react";
import { Surface } from "react-native-paper";
import ProgressGraphs from "./progress-graphs";
import NavBar from "../shared/navbar/navbar";
import CalendarControl from "../shared/calendar/calendar-control";
import { foodPageNavButtons } from "./food-page-nav-buttons";
import { ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FoodTimeContainer } from "./food-time/food-time-container";

const mealsData = [
  {
    id: "1",
    name: "Breakfast",
    protein: 20,
    carbs: 54,
    fats: 15,
    calories: 429,
  },
  {
    id: "2",
    name: "Lunch",
    protein: 30,
    carbs: 45,
    fats: 12,
    calories: 408,
  },
  {
    id: "3",
    name: "Dinner",
    protein: 25,
    carbs: 35,
    fats: 10,
    calories: 330,
  },
];

const MainFoodPage = () => {
  const tw = useTailwind();
  return (
    <Surface style={tw("h-full w-full bg-black items-center")}>
      <NavBar buttons={foodPageNavButtons} />
      <ScrollView
        style={tw("h-full w-full")}
        contentContainerStyle={tw("items-center")}
      >
        <CalendarControl />
        <ProgressGraphs
          actualCalories={2000}
          totalCalories={2000}
          actualProtein={70}
          totalProtein={130}
          actualCarbs={100}
          totalCarbs={180}
          actualFat={35}
          totalFat={80}
        />
        <FoodTimeContainer meals={mealsData} />
      </ScrollView>
    </Surface>
  );
};

export default MainFoodPage;
