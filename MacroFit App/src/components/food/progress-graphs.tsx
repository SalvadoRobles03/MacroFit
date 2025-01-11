import React from "react";
import { Surface } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { useProgressGraphColor } from "@/src/hooks/useProgressGraphColor";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

interface ProgressGraphsProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  actualCalories: number;
  actualProtein: number;
  actualCarbs: number;
  actualFat: number;
}

const ProgressGraphs: React.FC<ProgressGraphsProps> = ({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
  actualCalories,
  actualProtein,
  actualCarbs,
  actualFat,
}) => {
  const color = useProgressGraphColor(actualCalories, totalCalories);
  const tw = useTailwind();
  return (
    <Surface
      style={tw("mt-4 bg-black flex-col items-center justify-center w-full")}
    >
      <View style={tw("flex justify-center w-full mb-4 items-center")}>
        <CircularProgress
          value={actualCalories}
          maxValue={totalCalories}
          title={`${actualCalories} / ${totalCalories}`}
          subtitle="Calories"
          radius={60}
          inActiveStrokeColor="gray"
          activeStrokeColor={color}
        />
      </View>

      <View style={tw("flex w-full flex-row justify-center")}>
        <View>
          <CircularProgress
            value={actualProtein}
            maxValue={totalProtein}
            title={`${actualProtein} / ${totalProtein}`}
            subtitle="Protein"
            radius={50}
            inActiveStrokeColor="gray"
            activeStrokeColor="#1cc4d4"
          />
        </View>
        <View style={tw("ml-4")}>
          <CircularProgress
            value={actualCarbs}
            maxValue={totalCarbs}
            title={`${actualCarbs} / ${totalCarbs}`}
            subtitle="Carbs"
            radius={50}
            circleBackgroundColor=""
            inActiveStrokeColor="gray"
            activeStrokeColor="#d6c694"
          />
        </View>
        <View style={tw("ml-4")}>
          <CircularProgress
            value={actualFat}
            maxValue={totalFat}
            title={`${actualFat} / ${totalFat}`}
            subtitle="Fat"
            radius={50}
            circleBackgroundColor=""
            inActiveStrokeColor="gray"
            activeStrokeColor="#b55e02"
          />
        </View>
      </View>
    </Surface>
  );
};

export default ProgressGraphs;
