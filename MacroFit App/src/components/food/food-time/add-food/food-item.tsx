import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Text, IconButton } from "react-native-paper";

const FoodItem = ({ showModal }) => {
  const tw = useTailwind();
  return (
    <View
      style={tw("w-full h-24 border-2 border-white flex-row items-center mt-4")}
    >
      <View style={tw("w-16 h-16 justify-center items-center")}>
        <Image
          source={require("../../../../assets/images/icon.jpg")}
          style={styles.tinyLogo}
        />
      </View>
      <View style={tw("flex-1 flex-col justify-center items-center")}>
        <View style={tw("w-full")}>
          <Text style={tw("text-white text-lg text-center")}>
            Mermelada de frambuesa con mango y platano
          </Text>
        </View>
        <View style={tw("items-center mt-2")}>
          <View style={tw("flex-row")}>
            <Text style={tw("text-white text-xs")}>P: 50 g</Text>
            <Text style={tw("ml-4 text-white text-xs")}>C: 10 g</Text>
            <Text style={tw("ml-4 text-white text-xs")}>F: 25 g</Text>
          </View>
        </View>
      </View>
      <View style={tw("w-10 justify-center items-center")}>
        <IconButton icon={"plus"} iconColor="white" onPress={showModal}></IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 6,
  },
});

export default FoodItem;
