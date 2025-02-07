import { getDBConnection } from "../db-services/db-service";

export const saveFoodTime = async (foodTime: FoodTime) => {
  try {
    const db = await getDBConnection();
    await db?.runAsync(
      ` INSERT INTO food_times (food_day_id,name) VALUES (${foodTime.food_day_id}, '${foodTime.name}' ); `
    );
  } catch (error) {
    console.error(error);
  }
};
