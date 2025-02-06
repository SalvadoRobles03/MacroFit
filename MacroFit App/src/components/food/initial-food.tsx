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
  const [num, setNum] = useState(numFoods[0].value);
  const [untilDay, setUntilDay] = useState(days[0].value);
  const [isFocus, setIsFocus] = useState(false);

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
          onPress={() => navigation.reset({ routes: [{index:0, name: "Food" }] })}
        >
          <Text style={tw("text-white text-2xl mr-4")}>Create</Text>
        </Button>
      </View>
    </View>
  );
};

export default InitialFood;
