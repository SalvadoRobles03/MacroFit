import { ScrollView, View } from "react-native";
import { Text, IconButton, Menu, Icon } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";
import MealTimeContentItem from "./meal-time-content-item";


const MealTimeContent = () => {
  const tw = useTailwind();
  
  return (
    <View style={tw("w-full border-white border-2 h-[78%]")}>
      <ScrollView
              style={tw(" h-full w-full")}
              contentContainerStyle={tw("items-center")}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
        <MealTimeContentItem id={1}/>
        <MealTimeContentItem id={2}/>
        <MealTimeContentItem id={3}/>
        <MealTimeContentItem id={4}/>
        <MealTimeContentItem id={5}/>
        <MealTimeContentItem id={6}/>
        <MealTimeContentItem id={7}/>
        <MealTimeContentItem id={8}/>
        <MealTimeContentItem id={9}/>
        <MealTimeContentItem id={10}/>
        <MealTimeContentItem id={12}/>
        <MealTimeContentItem id={13}/>
        <MealTimeContentItem id={14}/>
        <MealTimeContentItem id={15}/>
      </ScrollView>
    </View>
  );
};

export default MealTimeContent;
