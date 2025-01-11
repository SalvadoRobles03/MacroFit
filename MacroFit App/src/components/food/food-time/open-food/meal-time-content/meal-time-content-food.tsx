import { ScrollView, View } from "react-native";
import { Text, IconButton, Checkbox } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";

const MealTimeContentFood = ({ id, moveUp, moveDown }) => {
  const tw = useTailwind();
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={tw(
        "w-[95%] border-white border-2 h-18 mt-1 mb-1 flex-row justify-between items-center"
      )}
    >
      <View style={tw("flex-col h-14")}>
        <IconButton
          icon="arrow-up"
          onPress={() => moveUp(id)}
          iconColor="white"
          size={18}
        />
        <IconButton
          icon="arrow-down"
          onPress={() => moveDown(id)}
          iconColor="white"
          size={18}
        />
      </View>
      <View style={tw("flex flex-row w-full")}>
        <View style={tw("h-full flex-col py-2 w-full")}>
          <View style={tw("flex-row")}>
            <View style={tw(" w-full pb-2 ")}>
              <Text style={tw("ml-2 text-white text-s h-max-8 text-center")}>
                {id}
              </Text>
            </View>
          </View>
          <View style={tw("items-center")}>
            <View style={tw("flex-row")}>
              <Text style={tw("text-white text-xs")}>P: 50 g</Text>
              <Text style={tw("ml-4 text-white text-xs")}>C: 10 g</Text>
              <Text style={tw("ml-4 text-white text-xs")}>F: 25 g</Text>
            </View>
          </View>
          <View style={tw("items-center w-full pt-2")}>
            <Text style={tw("text-white text-s ")}>100 ml</Text>
          </View>
        </View>
      </View>
      <View style={tw("flex-col")}>
        <View style={tw("items-center w-full")}>
          <Text style={tw("text-white text-lg ")}>0 kcal</Text>
        </View>
        <View style={tw("flex-row w-fit")}>
          <IconButton
            icon={"circle-edit-outline"}
            iconColor="white"
            style={tw("")}
          ></IconButton>
          <IconButton
            icon={"delete"}
            iconColor="white"
            style={tw("")}
          ></IconButton>
        </View>
      </View>
      <View>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color="green"
        />
      </View>
    </View>
  );
};

export default MealTimeContentFood;
