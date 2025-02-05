import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const InternalErrorPage = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <Text style={tw("text-white text-3xl mt-8")}>
        500 - Internal Server Error
      </Text>
      <Button
        style={tw("mt-8 bg-black text-white border-2 border-white")}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={tw("text-white text-2xl")}>Return</Text>
      </Button>
    </View>
  );
};

export default InternalErrorPage;
