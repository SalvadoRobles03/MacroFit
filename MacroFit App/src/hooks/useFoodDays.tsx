import { useState, useEffect } from "react";
import { checkFoodDaysByProfileId } from "../api/food-days-api";

const useFoodDays = (profile: Profile) => {
  const [isFoodDay, setIsFoodDay] = useState<boolean>(false);

  const checkFoodDays = async () => {
    try {
      if (profile && profile.id) {
        const result = await checkFoodDaysByProfileId(profile.id);
        setIsFoodDay(result);
      }
    } catch (error) {
      console.error("Error checking Food Days:", error);
    }
  };

  useEffect(() => {
    checkFoodDays();
  }, [profile]);

  return isFoodDay;
};

export default useFoodDays;
