import { useMemo } from "react";

export const useProgressGraphColor = (
  actualCalories: number,
  totalCalories: number
) => {
  const color = useMemo(() => {
    const percentage = (actualCalories / totalCalories) * 100;

    if (percentage <= 50 || percentage > 105) {
      return "red";
    } else if (percentage <= 95) {
      return "yellow";
    } else {
      return "#5df542";
    }
  }, [actualCalories, totalCalories]);

  return color;
};
