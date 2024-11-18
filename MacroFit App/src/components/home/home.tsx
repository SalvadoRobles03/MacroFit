import React from "react";
import { Text, Button, Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";

const Home = () => {
  const tw = useTailwind();
  return (
    <Surface
      style={tw("flex-1 justify-center items-center h-full w-full bg-black")}
    >
      <Text variant="headlineMedium" style={tw("mb-4 text-pink-500")}>
        Welcome to MacroFit
      </Text>
      <Button
        mode="text"
        onPress={() => console.log("Pressed")}
        style={tw("mb-2 bg-red-500")}
      >
        <Text style={tw("text-white")}>Button</Text>
      </Button>
      <Button mode="outlined" onPress={() => console.log("Pressed 2")}>
        Learn More
      </Button>
    </Surface>
  );
};

export default Home;
