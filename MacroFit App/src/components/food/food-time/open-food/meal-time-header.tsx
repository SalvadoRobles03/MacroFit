import { View } from "react-native";
import { Text, IconButton, Menu, Icon } from "react-native-paper";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { useState } from "react";


const MealTimeHeader = ({ meal }: { meal: MealTime }) => {
  const tw = useTailwind();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View style={tw("w-full border-white border-2 h-16")}>
      <View style={tw("flex flex-row")}>
        <View style={tw("flex w-1/2")}>
          <View style={tw("h-fit")}>
            <Text style={tw("text-white ml-4 text-xl")}>{meal.name}</Text>
          </View>
          <View style={tw("h-8")}>
            <View style={tw("flex flex-row")}>
              <Text style={tw("ml-4 text-white text-lg")}>
                P: {meal.protein} g
              </Text>
              <Text style={tw("ml-4 text-white text-lg")}>
                C: {meal.carbs} g
              </Text>
              <Text style={tw("ml-4 text-white text-lg")}>
                F: {meal.fats} g
              </Text>
            </View>
          </View>
        </View>
        <View style={tw("w-1/2 flex flex-row")}>
          <View style={tw("w-1/2 justify-center items-center h-full ml-8")}>
            <Text style={tw("text-white text-xl")}>{meal.calories} kcal</Text>
          </View>
          <View style={tw("")}>
            <Menu
              style={tw("bg-black")}
              contentStyle={tw("bg-black")}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="dots-vertical"
                  size={36}
                  iconColor="white"
                  onPress={openMenu}
                ></IconButton>
              }
            >
              <Menu.Item
                onPress={() => {}}
                title="Replicate"
                leadingIcon={() => (
                  <Icon source="refresh" color="white" size={30} />
                )}
                style={tw("bg-black")}
                titleStyle={tw("text-white")}
              />
              <Menu.Item
                onPress={() => {}}
                title="Empty Meal"
                leadingIcon={() => (
                  <Icon source="delete" color="white" size={30} />
                )}
                style={tw("bg-black")}
                titleStyle={tw("text-white")}
              />
            </Menu>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealTimeHeader;
