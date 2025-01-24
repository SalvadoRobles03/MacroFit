import { View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Text, Button } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

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

const InitialFood = () => {
  const tw = useTailwind();
  const [num, setNum] = useState(1);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <View style={tw("w-full flex-row justify-center items-center")}>
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
    </View>
  );
};

export default InitialFood;
