import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const Home = () => {
  return (
    <View style={tw`bg-red-500 p-4`}>
      <Text style={tw`text-white text-lg`}>
        ¡Hola, Tailwind en React Native!
      </Text>
    </View>
  );
};

export default Home;
