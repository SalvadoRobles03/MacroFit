import { getDBConnection } from "../db-services/db-service";

export const getAllFoods = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await getDBConnection();
      const allFood = await db.getAllAsync("SELECT * FROM foods");
      resolve(allFood);
    } catch (error) {
      reject(error);
    }
  });
};

export const addFood = async (food: Food) => {
  try {
    const db = await getDBConnection();
    await db.runAsync(
      ` INSERT INTO foods (name, protein, carbs, fat, quantity_type, quantity, image_url) VALUES ('${food.name}', ${food.protein}, ${food.carbs}, ${food.fat}, '${food.quantity_type}', ${food.quantity}, '${food.image_url}'); `
    );
  } catch (error) {
    console.error(error);
  }
};
