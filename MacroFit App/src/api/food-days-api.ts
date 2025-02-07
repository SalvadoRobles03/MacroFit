import { getDBConnection } from "../db-services/db-service";

export const checkFoodDaysByProfileId = async (
  id: number
): Promise<boolean> => {
  try {
    const db = await getDBConnection();
    const foodDay = (await db?.getFirstAsync(`
      SELECT * FROM food_days
      WHERE profile_id = ${id}
      ORDER BY date DESC
      LIMIT 1
    `)) as FoodDay;

    if (foodDay) {
      const currentDate = new Date();
      const lastFoodDayDate = new Date(foodDay.date);
      return lastFoodDayDate >= currentDate;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const saveFoodDay = async (foodDay: FoodDay): Promise<FoodDay> => {
  try {
    const db = await getDBConnection();
    const result = await db?.runAsync(
      `INSERT INTO food_days (profile_id, macros_id, date) VALUES (${foodDay.profile_id}, ${foodDay.macros_id}, '${foodDay.date}');`
    );
    const savedFoodDay = await db?.getFirstAsync(
      `SELECT * FROM food_days WHERE rowid = last_insert_rowid();`
    );
    return savedFoodDay as FoodDay;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
