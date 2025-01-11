import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Text, IconButton } from "react-native-paper";

const FoodItem = () => {
  const tw = useTailwind();
  return (
    <View style={tw("w-full h-16 border-2 border-white flex-row items-center mt-4")}>
      <View style={tw("w-16 h-16 justify-center items-center")}>
        <Image
          source={require("../../../../assets/images/icon.jpg")}
          style={styles.tinyLogo}
        />
      </View>
      <View style={tw("flex-1 justify-center items-center")}>
        <Text style={tw("text-white text-lg text-center")}>
          Mermelada de frambuesa con mango y platano
        </Text>
      </View>
      <View style={tw("w-10 justify-center items-center")}>
        <IconButton icon={"plus"} iconColor="white"></IconButton>
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
