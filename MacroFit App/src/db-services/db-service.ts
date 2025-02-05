import * as SQLite from "expo-sqlite";

export const getDBConnection = async () => {
  try {
    const db = SQLite.openDatabaseAsync("macrofit.db");
    await createTables(db);
    return db;
  } catch (error) {
    console.error("Failed to get DB connection:", error);
  }
};

const createTables = async (db: Promise<SQLite.SQLiteDatabase>) => {
  const queries = [
    `create table if not exists exercises (
      id integer primary key autoincrement,
      name TEXT not null,
      description TEXT not null,
      short_version integer not null,
      video_url TEXT,
      image_url TEXT,
      type integer not null,
      check (short_version in (0, 1)),
      check (type in (0, 1))
    )`,
    `create table if not exists exercises_replacements (
      id integer primary key autoincrement,
      exercise_original integer not null references exercises,
      exercise_substitute integer not null references exercises
    )`,
    `create table if not exists muscle_groups (
      id integer primary key autoincrement,
      name TEXT not null
    )`,
    `create table if not exists muscles (
      id integer primary key autoincrement,
      muscle_group_id integer not null references muscle_groups,
      name TEXT not null
    )`,
    `create table if not exists exercises_muscles (
      exercise_id integer not null references exercises,
      muscle_id integer not null references muscles,
      id integer primary key autoincrement,
      type integer not null,
      check (type in (0, 1))
    )`,
    `create table if not exists profiles (
      id INTEGER primary key autoincrement,
      name TEXT not null,
      birth_date TEXT not null,
      sex integer not null,
      height REAL not null
    )`,
    `create table if not exists macros (
      id integer primary key autoincrement,
      profile_id integer not null references profiles,
      init_date TEXT not null,
      finish_date TEXT not null,
      protein REAL not null,
      carbs REAL not null,
      fat REAL not null,
      calories REAL not null,
      diet_type integer not null,
      check (diet_type IN (0, 1, 2))
    ) strict`,
    `create table if not exists evolution_records (
      id integer primary key autoincrement,
      profile_id integer not null references profiles,
      macros_id integer not null references macros,
      date TEXT not null,
      weight REAL not null,
      weight_unit integer not null,
      fat_porcentage REAL,
      front_url TEXT not null,
      side_url TEXT not null,
      back_url text not null,
      check (weight_unit IN (0, 1))
    )`,
    `create table if not exists food_days (
      id integer primary key autoincrement,
      macros_id integer not null references macros,
      profile_id integer not null references profiles,
      date TEXT not null
    )`,
    `create table if not exists food_times (
      id integer primary key autoincrement,
      food_day_id integer not null references food_days,
      name TEXT not null
    )`,
    `create table if not exists quantity_types (
      id integer primary key autoincrement,
      name TEXT not null,
      abbr TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    protein REAL NOT NULL,
    carbs REAL NOT NULL,
    fat REAL NOT NULL,
    quantity_type TEXT NOT NULL,
    image_url TEXT,
    quantity REAL NOT NULL,
    favorite INTEGER NOT NULL CHECK (favorite IN (0, 1))
);
`,
    `create table if not exists food_times_foods (
      id integer primary key autoincrement,
      food_time_id integer not null references food_times,
      food_id integer not null references foods,
      quantity REAL not null,
      completed integer not null,
      check (completed in (0, 1))
    )`,
    `create table if not exists recipes (
      id integer primary key autoincrement,
      name TEXT not null,
      recipe_type integer not null,
      total_protein REAL not null,
      total_carbs REAL not null,
      total_fat REAL not null,
      total_quantity REAL not null,
      quantity_type integer not null references quantity_types,
      image_url TEXT,
      check (recipe_type in (0, 1, 2))
    )`,
    `create table if not exists food_times_recipes (
      id integer primary key autoincrement,
      food_time_id integer not null references food_times,
      recipe_id integer not null references recipes,
      quantity REAL not null,
      completed integer,
      check (completed in (0, 1))
    )`,
    `create table if not exists preparation_steps (
      id integer primary key autoincrement,
      recipe_id integer not null references recipes,
      text TEXT not null
    )`,
    `create table if not exists recipes_foods (
      id integer primary key autoincrement,
      recipe_id integer not null references recipes,
      food_id integer not null references foods,
      quantity REAL not null
    )`,
    `create table if not exists reps_series (
      id integer primary key autoincrement,
      exercise_id integer not null references exercises,
      date TEXT not null,
      no_reps REAL not null,
      weight REAL not null,
      comment TEXT not null
    )`,
    `create table if not exists routines (
      id integer primary key autoincrement,
      profile_id integer not null references profiles,
      initial_date TEXT not null,
      final_date TEXT not null,
      focused_muscle_group integer references muscle_groups
    )`,
    `create table if not exists cardio_sessions (
      id integer primary key autoincrement,
      routine_id integer not null references routines,
      time TEXT not null,
      calories integer,
      hr REAL,
      completed_date TEXT not null
    )`,
    `create table if not exists structures (
      id integer primary key autoincrement,
      muscle_group_id integer not null references muscle_groups,
      name TEXT not null
    )`,
    `create table if not exists routine_days (
      id integer primary key autoincrement,
      routine_id integer not null references routines,
      structure_id integer not null references structures,
      date TEXT not null
    )`,
    `create table if not exists structures_muscles (
      id integer primary key autoincrement,
      structure_id integer not null references structures,
      muscle_id integer not null references muscles,
      quantity integer not null
    )`,
    `create table if not exists time_series (
      id integer primary key autoincrement,
      exercise_id integer not null references exercises,
      date TEXT not null,
      time TEXT not null,
      comment TEXT not null
    )`,
  ];

  for (const query of queries) {
    (await db).runAsync(query);
  }
};
