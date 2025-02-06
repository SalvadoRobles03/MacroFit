import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loading = () => { 
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={100} color="#ffffff" />
      </View>
    );
}

export default Loading;