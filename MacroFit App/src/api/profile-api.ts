import { getDBConnection } from "../db-services/db-service";

export const saveProfile = async (profile: Profile) => {
  try {
    const db = await getDBConnection();
    await db?.runAsync(
      ` INSERT INTO profiles (name, birth_date,sex,height) VALUES ('${profile.name}', '${profile.birth_date}', ${profile.sex}, ${profile.height}); `
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllProfiles = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await getDBConnection();
      const allProfile = await db?.getAllAsync("SELECT * FROM profiles");
      resolve(allProfile);
    } catch (error) {
      reject(error);
    }
  });
};

export const getProfile = async (id: number): Promise<Profile | undefined> => {
  try {
    const db = await getDBConnection();
    const profile = await db?.getFirstAsync(`SELECT * FROM profiles WHERE id = ${id}`);
    return profile as Profile;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const deleteProfile = async (id: number) => {
  try {
    const db = await getDBConnection();
    await db?.runAsync(`DELETE FROM profiles WHERE id = ${id}`);
  } catch (error) {
    console.error(error);
  }
}
