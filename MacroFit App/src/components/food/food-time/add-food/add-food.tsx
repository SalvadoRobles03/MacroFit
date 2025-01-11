import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import { Searchbar, SegmentedButtons } from "react-native-paper";
import React from "react";
import FoodItem from "./food-item";

const AddFood = () => {
  const tw = useTailwind();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [value, setValue] = React.useState("frequent");

  return (
    <View style={tw("h-full w-full bg-black items-center")}>
      <View style={tw("w-[95%]")}>
        <View style={tw("border-2 rounded-full border-white")}>
          <Searchbar
            placeholder="Search"
            placeholderTextColor={"grey"}
            onChangeText={setSearchQuery}
            value={searchQuery}
            iconColor="white"
            rippleColor={"white"}
            style={tw("bg-black")}
            inputStyle={tw("text-white")}
          />
        </View>
        <SegmentedButtons
          style={tw("mt-4")}
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "frequent",
              label: "Frequent",
              uncheckedColor: "white",
            },
            {
              value: "favorite",
              label: "Favorite",
              uncheckedColor: "white",
            },
          ]}
        />
        <View style={tw("h-auto w-full ")}>
          <FlatList
            data={[...Array(12).keys()]}
            renderItem={() => <FoodItem />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default AddFood;
