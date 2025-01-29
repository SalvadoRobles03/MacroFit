import React, { useState, useEffect } from "react";
import { Text, Button, Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import { getAllFoods, addFood } from "../../api/foods-api";

const Home = () => {
  const tw = useTailwind();

  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    handleGetAllFoods();
  }, []);

  const handleGetAllFoods = async () => {
    setFoods((await getAllFoods()) as Food[]);
  };

  const handleAddFood = async (food: Food) => {
    await addFood(food);
  };

  return (
    <Surface
      style={tw("flex-1 justify-center items-center h-full w-full bg-black")}
    >
      <Text variant="headlineMedium" style={tw("mb-4 text-pink-500")}>
        Welcome to MacroFit
      </Text>
      <Button
        mode="text"
        onPress={handleGetAllFoods}
        style={tw("mb-2 bg-red-500")}
      >
        <Text style={tw("text-white")}>Get All Foods</Text>
      </Button>
      <Button
        mode="text"
        onPress={() =>
          handleAddFood({
            name: "Orange",
            protein: 0.5,
            carbs: 25,
            fat: 0.3,
            quantity_type: "Grams",
            quantity: 100,
            image_url: "httos",
            favorite: 1,
          })
        }
        style={tw("mb-2 bg-green-500")}
      >
        <Text style={tw("text-white")}>Add Food</Text>
      </Button>
      <Button mode="outlined" onPress={() => console.log("Pressed 2")}>
        Learn More
      </Button>
      <Text style={tw("text-white")}>
        foods: {foods.map((food) => food.id + ":" + food.name).join(", ")}
      </Text>
    </Surface>
  );
};

export default Home;
