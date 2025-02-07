import { View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Text, Button } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useActualMacros from "@/src/hooks/useActualMacros";
import useFoodDays from "@/src/hooks/useFoodDays";
import { ProfileContext } from "@/src/Auth/ProfileContext";
import { saveFoodDay } from "@/src/api/food-days-api";
import { getActualMacrosByProfileId } from "@/src/api/macros-api";
import { saveFoodTime } from "@/src/api/food-times-api";

const numFoods = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
];

const days = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

const InitialFood = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);
  const [num, setNum] = useState(numFoods[0].value);
  const [untilDay, setUntilDay] = useState(days[0].value);
  const [isFocus, setIsFocus] = useState(false);
  const [macrosId, setMacrosId] = useState<number | undefined | null>(
    undefined
  );

  useEffect(() => {
    const fetchMacros = async () => {
      try {
        const macros = await getActualMacrosByProfileId(profile.id);
        setMacrosId(macros?.id);
      } catch (error) {
        console.error("Error fetching macros:", error);
      }
    };
    fetchMacros();
  }, [profile.id]);

  const getNextDayOfWeek = (dayOfWeek: string): Date => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const resultDate = new Date(today);
    const dayIndex = daysOfWeek.indexOf(dayOfWeek);
    resultDate.setDate(today.getDate() + ((dayIndex + 7 - today.getDay()) % 7));
    return resultDate;
  };

  const handleSubmit = async () => {
    if (!macrosId) {
      console.error("No macros ID available");
      return;
    }

    const startDate = new Date();
    const endDate = getNextDayOfWeek(untilDay);

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const foodDay: FoodDay = {
        id: null,
        macros_id: macrosId,
        profile_id: profile.id,
        date: date.toISOString().split("T")[0],
      };

      try {
        const savedFoodDay = await saveFoodDay(foodDay);

        const numInt = parseInt(num);
        for (let i = 0; i < numInt; i++) {
          let name = "Snack";
          if (i === 0) {
            name = "Breakfast";
          } else if (i === Math.floor(numInt / 2)) {
            name = "Lunch";
          } else if (i === numInt - 1) {
            name = "Dinner";
          }

          const foodTime: FoodTime = {
            id: null,
            food_day_id: savedFoodDay.id,
            name: name,
          };

          await saveFoodTime(foodTime);
        }
      } catch (error) {
        console.error("Error saving food day or food time:", error);
      }
    }

    navigation.reset({ routes: [{ index: 0, name: "Food" }] });
  };

  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <View style={tw("w-full flex-row justify-center items-center mt-16")}>
        <Text style={tw("text-white text-2xl mr-4")}>Number of Foods: </Text>
        <Dropdown
          containerStyle={tw("bg-black")}
          itemTextStyle={tw("text-white")}
          placeholderStyle={tw("text-white")}
          selectedTextStyle={tw("text-white bg-black")}
          style={tw("w-20 border-2 border-white p-4")}
          activeColor="gray"
          data={numFoods}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=""
          value={num}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setNum(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={tw("w-full flex-row justify-center items-center mt-4")}>
        <Text style={tw("text-white text-2xl mr-4")}>Create until day: </Text>
        <Dropdown
          containerStyle={tw("bg-black")}
          itemTextStyle={tw("text-white")}
          placeholderStyle={tw("text-white")}
          selectedTextStyle={tw("text-white bg-black")}
          style={tw("w-40 border-2 border-white p-4")}
          activeColor="gray"
          data={days}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=""
          value={untilDay}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setUntilDay(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={tw("w-full flex-col justify-center items-center mt-4")}>
        <Button
          icon={() => <AntDesign name="right" size={24} color="white" />}
          mode="contained"
          style={tw("mt-4 bg-black text-white border-2 border-white")}
          onPress={() => handleSubmit}
        >
          <Text style={tw("text-white text-2xl mr-4")}>Create</Text>
        </Button>
      </View>
    </View>
  );
};

export default InitialFood;
