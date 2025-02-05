import { useState, useEffect, useContext } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { ProfileContext } from "../Auth/ProfileContext";

import { useNavigation } from "@react-navigation/native";
import { saveMacros } from "../api/macros-api";
import { Macros } from "../interfaces/macros.interface";

const useMacrosForm = () => {
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [macros, setMacros] = useState({
    id: null,
    profile_id: profile.id,
    init_date: date.toISOString().split("T")[0],
    finish_date: 'Actual',
    protein: 0,
    carbs: 0,
    fat: 0,
    calories: 0,
    diet_type: 2,
  });

  const handleChange = (name: keyof Macros, value: string | number) => {
    setMacros({ ...macros, [name]: value });
  };

  const handleSubmit = () => {
    saveMacros(macros);
  };

  return {
    isFocus,
    setIsFocus,
    date,
    macros,
    handleChange,
    handleSubmit,
  };
};

export default useMacrosForm;
