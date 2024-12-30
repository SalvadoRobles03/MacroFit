import { ScrollView, View } from "react-native";
import { Text, IconButton, Menu, Icon } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";
import MealTimeContentFood from "./meal-time-content-food";

const MealTimeContent = () => {
  const tw = useTailwind();
  const [food, setFood] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]);

  const moveUp = (id) => {
    const index = food.indexOf(id);
    if (index > 0) {
      const newFood = [...food];
      [newFood[index - 1], newFood[index]] = [newFood[index], newFood[index - 1]];
      setFood(newFood);
    }
  };

  const moveDown = (id) => {
    const index = food.indexOf(id);
    if (index < food.length - 1) {
      const newFood = [...food];
      [newFood[index + 1], newFood[index]] = [newFood[index], newFood[index + 1]];
      setFood(newFood);
    }
  };

  return (
    <View style={tw("w-full border-white border-2 h-[78%]")}>
      <ScrollView
        style={tw("h-full w-full")}
        contentContainerStyle={tw("items-center")}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {food.map((id) => (
          <MealTimeContentFood key={id} id={id} moveUp={moveUp} moveDown={moveDown} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MealTimeContent;
