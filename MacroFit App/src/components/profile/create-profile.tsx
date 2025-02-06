import { Text, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import React, { useEffect, useState } from "react";

import { Dropdown } from "react-native-element-dropdown";
import useProfileForm from "../../hooks/useProfileForm";
import { useNavigation } from "@react-navigation/native";

const sexOptions = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

const CreateProfile = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const {
    isFocus,
    setIsFocus,
    date,
    profile,
    showDatePicker,
    handleChange,
    handleSubmit,
    formatDate,
  } = useProfileForm();

  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <View style={tw("w-full flex-row justify-center items-center mt-8")}>
        <Text style={tw("text-white text-3xl")}>Create Profile</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("SelectProfile");
        }}
        style={tw("mt-2 bg-black text-white border-2 border-white")}
      >
        <Text style={tw("text-white text-large")}>Select Profile</Text>
      </Button>
      <View style={tw("w-[90%] justify-center items-center")}>
        <TextInput
          mode="outlined"
          label="Name"
          value={profile.name}
          textColor="white"
          placeholderTextColor={"white"}
          onChangeText={(text) => handleChange("name", text)}
          style={tw("w-full mt-4 bg-black text-white")}
        />
        <TextInput
          mode="outlined"
          label="Height (cm)"
          textColor="white"
          placeholderTextColor={"white"}
          value={profile.height.toString()}
          onChangeText={(text) => handleChange("height", text)}
          style={tw("w-full mt-4 bg-black text-white")}
        />
        <View style={tw("w-full flex-row justify-center items-center")}>
          <Button
            onPress={showDatePicker}
            style={tw("mt-4 bg-black border-2 border-white mr-8")}
          >
            <Text style={tw("text-white text-2xl")}>Select Birth Date</Text>
          </Button>
          <Text style={tw("text-white text-2xl mt-4")}>
            {formatDate(profile.birth_date)}
          </Text>
        </View>
        <View style={tw("w-full flex-row justify-center items-center mt-4")}>
          <Text style={tw("text-white text-2xl mr-8")}>Sex</Text>
          <Dropdown
            containerStyle={tw("bg-black")}
            itemTextStyle={tw("text-white")}
            placeholderStyle={tw("text-white")}
            selectedTextStyle={tw("text-white bg-black")}
            style={tw("w-32 border-2 border-white p-4")}
            activeColor="gray"
            data={sexOptions}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            value={profile.sex}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              handleChange("sex", item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={tw("mt-8 bg-black text-white border-2 border-white")}
      >
        <Text style={tw("text-white text-2xl")}>Create Profile</Text>
      </Button>
    </View>
  );
};

export default CreateProfile;
