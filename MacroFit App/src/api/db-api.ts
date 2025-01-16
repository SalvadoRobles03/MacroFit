import { getDBConnection } from "../db-services/db-service";

export const getAllFoods = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql("SELECT * FROM foods");
  return results[0].rows.raw();
};

export const getFoodById = async (id: number) => {
  const db = await getDBConnection();
  const results = await db.executeSql("SELECT * FROM foods WHERE id = ?", [id]);
  return results[0].rows.item(0);
};

export const addFood = async (name: string, protein: number, carbs: number, fat: number, quantityType: string, imageUrl: string, quantity: number) => {
  const db = await getDBConnection();
  await db.executeSql(
    "INSERT INTO foods (name, protein, carbs, fat, quantity_type, image_url, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, protein, carbs, fat, quantityType, imageUrl, quantity]
  );
};

export const updateFood = async (id: number, name: string, protein: number, carbs: number, fat: number, quantityType: string, imageUrl: string, quantity: number) => {
  const db = await getDBConnection();
  await db.executeSql(
    "UPDATE foods SET name = ?, protein = ?, carbs = ?, fat = ?, quantity_type = ?, image_url = ?, quantity = ? WHERE id = ?",
    [name, protein, carbs, fat, quantityType, imageUrl, quantity, id]
  );
};

export const deleteFood = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql("DELETE FROM foods WHERE id = ?", [id]);
};
