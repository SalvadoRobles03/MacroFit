import React from "react";
import { Text, Button, Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import { getAllFoods, addFood } from "../../api/db-api";

const Home = () => {
  const tw = useTailwind();

  const handleGetAllFoods = async () => {
    const foods = await getAllFoods();
    console.log(foods);
  };

  const handleAddFood = async () => {
    await addFood("Piña",2,8.53,14.7,"Grams","",100);
    console.log("Food added");
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
        onPress={handleAddFood}
        style={tw("mb-2 bg-green-500")}
      >
        <Text style={tw("text-white")}>Add Food</Text>
      </Button>
      <Button mode="outlined" onPress={() => console.log("Pressed 2")}>
        Learn More
      </Button>
    </Surface>
  );
};

export default Home;
