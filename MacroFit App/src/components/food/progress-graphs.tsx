import React from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import CircularProgress from "react-native-circular-progress-indicator";

//https://reactscript.com/circular-progress-indicator/

const ProgressGraphs = ({totalCalories, totalProtein, totalCarbs, totalFat, actualCalories, actualProtein, actualCarbs, actualFat}) => {
  return (
    <Surface style={tw `mt-24 bg-black flex-col`}>
        <div style={tw `flex justify-center w-full mb-4`}>
        <CircularProgress value={actualCalories} maxValue={totalCalories} title={`${actualCalories} / ${totalCalories}`} subtitle="Calories" radius={60} circleBackgroundColor="" inActiveStrokeColor = 'gray'/>
        </div>
      
      <div style={tw `flex justify-center w-full space-x-2`}>
        <div style={tw ``}><CircularProgress value={actualProtein} maxValue={totalProtein} title={`${actualProtein} / ${totalProtein}`} subtitle="Protein" radius={50} inActiveStrokeColor = 'gray' activeStrokeColor="#1cc4d4"/></div>
        <div style={tw `ml-4`}><CircularProgress value={actualCarbs} maxValue={totalCarbs} title={`${actualCarbs} / ${totalCarbs}`} subtitle="Carbs" radius={50} circleBackgroundColor="" inActiveStrokeColor = 'gray' activeStrokeColor="#d6c694"/></div>
        <div style={tw `ml-4`}><CircularProgress value={actualFat} maxValue={totalFat} title={`${actualFat} / ${totalFat}`} subtitle="Fat" radius={50} circleBackgroundColor="" inActiveStrokeColor = 'gray' activeStrokeColor="#b55e02"/></div>
      </div>
    </Surface>
  );
};

export default ProgressGraphs;
