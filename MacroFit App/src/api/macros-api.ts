import { getDBConnection } from "../db-services/db-service";
import { Macros } from "../interfaces/macros.interface";

export const getActualMacrosByProfileId = async (
  id: number
): Promise<Macros | undefined> => {
  try {
    const db = await getDBConnection();
    const macros = await db?.getFirstAsync(`
      SELECT * FROM macros
      WHERE profile_id = ${id} 
      AND finish_date = 'Actual'
      LIMIT 1
    `);
    return macros as Macros;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const hasActualMacros = async (profileId: number): Promise<boolean> => {
  const macros = await getActualMacrosByProfileId(profileId);
  return macros !== undefined && macros !== null;
};

export const saveMacros = async (macros: Macros): Promise<void> => {
  try {
    const db = await getDBConnection();
    await db?.runAsync(`
      INSERT INTO macros (profile_id, init_date, finish_date, protein, carbs, fat, calories, diet_type)
      VALUES (${macros.profile_id}, '${macros.init_date}', '${macros.finish_date}', ${macros.protein}, ${macros.carbs}, ${macros.fat}, ${macros.calories}, ${macros.diet_type})
    `);
    await db?.runAsync(`
      UPDATE macros
      SET finish_date = '${macros.init_date}'
      WHERE profile_id = ${macros.profile_id} 
      AND finish_date = 'Actual'
      AND id = (
        SELECT id FROM macros
        WHERE profile_id = ${macros.profile_id} 
        AND finish_date = 'Actual'
        ORDER BY init_date DESC
        LIMIT 1 OFFSET 1
      )
    `);
  } catch (error) {
    console.error(error);
  }
};
