import { Stack } from "expo-router";
import { View } from "react-native";

export default function FoodLayout() {
  const screenOptions = {
    headerStyle: { backgroundColor: "black" },
    contentStyle: { backgroundColor: "black" },
    headerTintColor: "white",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="open-food-page"
          options={{
            headerTitle: "",
          }}
        />
      </Stack>
    </View>
  );
}
