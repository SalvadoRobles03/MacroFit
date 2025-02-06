import { Text, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";
import { DietType } from "@/src/enum/DietType";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import useMacrosForm from "@/src/hooks/useMacrosForm";
import { calculateCalories } from "@/src/utilities/utils";

const dietTypes = [
  { label: "Cutting", value: DietType.Cutting },
  { label: "Bulking", value: DietType.Bulking },
  { label: "Maintenance", value: DietType.Maintenance },
];

const NewMacros = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { setIsFocus, macros, handleChange, handleSubmit } = useMacrosForm();

  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <View style={tw("w-full flex-row justify-center items-center mt-8")}>
        <Text style={tw("text-white text-3xl")}>New Macros</Text>
      </View>
      <View style={tw("w-[90%] justify-center items-center")}>
        <TextInput
          mode="outlined"
          label="Protein"
          value={macros.protein.toString()}
          textColor="white"
          placeholderTextColor={"white"}
          onChangeText={(text) => handleChange("protein", text)}
          style={tw("w-full mt-4 bg-black text-white")}
          keyboardType="numeric"
        />
        <TextInput
          mode="outlined"
          label="Carbs"
          textColor="white"
          placeholderTextColor={"white"}
          value={macros.carbs.toString()}
          onChangeText={(text) => handleChange("carbs", text)}
          style={tw("w-full mt-4 bg-black text-white")}
          keyboardType="numeric"
        />
        <TextInput
          mode="outlined"
          label="Fat"
          textColor="white"
          placeholderTextColor={"white"}
          value={macros.fat.toString()}
          onChangeText={(text) => handleChange("fat", text)}
          style={tw("w-full mt-4 bg-black text-white")}
          keyboardType="numeric"
        />
        <View style={tw("w-full flex-row justify-center items-center")}>
          <Text style={tw("text-white text-2xl mt-4")}>
            Calories:{" "}
            {calculateCalories(macros.protein, macros.carbs, macros.fat)}
          </Text>
        </View>
        <View style={tw("w-full flex-row justify-center items-center mt-4")}>
          <Text style={tw("text-white text-2xl mr-8")}>Diet Type</Text>
          <Dropdown
            containerStyle={tw("bg-black")}
            itemTextStyle={tw("text-white")}
            placeholderStyle={tw("text-white")}
            selectedTextStyle={tw("text-white bg-black")}
            style={tw("w-40 border-2 border-white p-4")}
            activeColor="gray"
            data={dietTypes}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            value={macros.diet_type}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              handleChange("diet_type", item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>

      <Button
        mode="contained"
        onPress={() => handleSubmit()}
        style={tw("mt-8 bg-black text-white border-2 border-white")}
      >
        <Text style={tw("text-white text-2xl")}>Create Macros</Text>
      </Button>
    </View>
  );
};

export default NewMacros;
