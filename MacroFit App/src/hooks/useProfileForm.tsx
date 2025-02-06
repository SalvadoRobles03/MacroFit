import { useState, useEffect, useContext } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { ProfileContext } from "../Auth/ProfileContext";

import { useNavigation } from "@react-navigation/native";

const useProfileForm = () => {
  const navigation = useNavigation();
  const { registerProfile } = useContext(ProfileContext);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [profile, setProfile] = useState({
    id: null,
    name: "",
    birth_date: date.toISOString().split("T")[0],
    sex: 2,
    height: 0.0,
  });

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  useEffect(() => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      birth_date: date.toISOString().split("T")[0],
    }));
  }, [date]);

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => {
        const currentDate = selectedDate || date;
        currentDate.setMinutes(
          currentDate.getMinutes() - currentDate.getTimezoneOffset()
        );
        onChange(event, currentDate);
      },
      mode: "date",
      display: "spinner",
    });
  };

  const handleChange = (name: keyof Profile, value: string | number) => {
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    registerProfile(profile);
    navigation.navigate("SelectProfile");
  };

  const formatDate = (dateString: String) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return {
    isFocus,
    setIsFocus,
    date,
    profile,
    showDatePicker,
    handleChange,
    handleSubmit,
    formatDate,
  };
};

export default useProfileForm;
