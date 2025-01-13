import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Text } from "react-native-paper";

const Macros: React.FC<MacrosProps> = ({ protein, carbs, fat }) => {
  const tw = useTailwind();
  return (
    <View style={tw("items-center mt-6")}>
      <View style={tw("flex-row")}>
        <View style={tw("flex-col items-center mr-4")}>
          <Text style={tw("text-white text-3xl")}>{protein}</Text>
          <Text style={tw("text-white text-xl")}>Protein</Text>
        </View>
        <View style={tw("flex-col items-center mr-4")}>
          <Text style={tw("text-white text-3xl")}>{carbs}</Text>
          <Text style={tw("text-white text-xl")}>Carbs</Text>
        </View>
        <View style={tw("flex-col items-center")}>
          <Text style={tw("text-white text-3xl")}>{fat}</Text>
          <Text style={tw("text-white text-xl")}>Fat</Text>
        </View>
      </View>
    </View>
  );
};

export default Macros;