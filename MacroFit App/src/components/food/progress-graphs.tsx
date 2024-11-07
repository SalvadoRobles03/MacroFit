import React from "react";
import { Surface } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import tw from "tailwind-react-native-classnames";
import { calculateCalories } from "../../utilities/utils";

interface ProgressGraphsProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  actualProtein: number;
  actualCarbs: number;
  actualFat: number;
}

const ProgressGraphs: React.FC<ProgressGraphsProps> = ({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
  actualProtein,
  actualCarbs,
  actualFat,
}) => {
  let actualCalories = calculateCalories(actualProtein, actualCarbs, actualFat);

  function getColor() {
    const percentage = (actualCalories / totalCalories) * 100;

    if (percentage <= 50 || percentage > 105) {
      return "red";
    } else if (percentage <= 95) {
      return "yellow";
    } else {
      return "#5df542";
    }
  }

  return (
    <Surface style={tw`mt-4 bg-black flex-col`}>
      <div style={tw`flex justify-center w-full mb-4`}>
        <CircularProgress
          value={actualCalories}
          maxValue={totalCalories}
          title={`${actualCalories} / ${totalCalories}`}
          subtitle="Calories"
          radius={60}
          inActiveStrokeColor="gray"
          activeStrokeColor={getColor()}
        />
      </div>

      <div style={tw`flex justify-center w-full space-x-2`}>
        <div>
          <CircularProgress
            value={actualProtein}
            maxValue={totalProtein}
            title={`${actualProtein} / ${totalProtein}`}
            subtitle="Protein"
            radius={50}
            inActiveStrokeColor="gray"
            activeStrokeColor="#1cc4d4"
          />
        </div>
        <div style={tw`ml-4`}>
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
        </div>
        <div style={tw`ml-4`}>
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
        </div>
      </div>
    </Surface>
  );
};

export default ProgressGraphs;
