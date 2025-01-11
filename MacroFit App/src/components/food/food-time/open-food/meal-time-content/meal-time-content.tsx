import { FlatList, View } from "react-native";
import { Text, IconButton, Menu, Icon } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useEffect, useState, useCallback } from "react";
import MealTimeContentFood from "./meal-time-content-food";

const MealTimeContent = () => {
  const tw = useTailwind();
  const [food, setFood] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15,
  ]);
  const [foodIndex, setFoodIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const index = food.reduce((acc, item, idx) => {
      acc[item] = idx;
      return acc;
    }, {} as { [key: number]: number });
    setFoodIndex(index);
  }, [food]);

  const moveItem = useCallback(
    (id: number, direction: "up" | "down") => {
      setFood((prevFood) => {
        const index = foodIndex[id];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < prevFood.length) {
          const newFood = [...prevFood];
          [newFood[index], newFood[targetIndex]] = [
            newFood[targetIndex],
            newFood[index],
          ];
          return newFood;
        }
        return prevFood;
      });
    },
    [foodIndex]
  );

  const moveUp = useCallback((id: number) => moveItem(id, "up"), [moveItem]);
  const moveDown = useCallback(
    (id: number) => moveItem(id, "down"),
    [moveItem]
  );

  return (
    <View style={tw("w-full border-white border-2 h-auto")}>
      <FlatList
        data={food}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <MealTimeContentFood id={item} moveUp={moveUp} moveDown={moveDown} />
        )}
        contentContainerStyle={tw("items-center")}
        showsVerticalScrollIndicator={true}
        bounces={true}
      />
    </View>
  );
};

export default MealTimeContent;
