import { ScrollView, View } from "react-native";
import { Text, IconButton, Menu, Icon } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";


const MealTimeContentItem = ({id}) => {
  const tw = useTailwind();
  
  return (
    <View style={tw("w-[95%] border-white border-2 h-16 mt-1 mb-1")}>
      <Text style={tw("text-white")}>{id}</Text>
    </View>
  );
};

export default MealTimeContentItem;
