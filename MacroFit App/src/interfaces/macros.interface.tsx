import { DietType } from "../enum/DietType";

export interface Macros {
  id: number | null;
  profile_id: number;
  init_date: string;
  finish_date: string;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  diet_type: DietType;
}