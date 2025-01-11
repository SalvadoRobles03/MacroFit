import { View } from "react-native";
import { Text, IconButton, Menu, Icon, Button } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";

const MealTimeFooter = () => {
  const tw = useTailwind();

  return (
    <View style={tw("w-full border-white border-2 h-16 flex-row ")}>
      <View style={tw("w-1/2 justify-center items-center")}>
        <Button icon="plus" labelStyle={tw("text-xl")}>Add Food</Button>
      </View>
      <View style={tw("w-1/2 justify-center items-center")}>
        <Button icon="plus" labelStyle={tw("text-xl")}>Add Recipe</Button>
      </View>
    </View>
  );
};

export default MealTimeFooter;
