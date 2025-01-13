import { FlatList, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import {
  Searchbar,
  SegmentedButtons,
  Modal,
  Portal,
  TextInput,
} from "react-native-paper";
import React, { useState } from "react";
import FoodItem from "./food-item";
import Macros from "@/src/components/shared/macros/macros";

const AddFood = () => {
  const tw = useTailwind();

  const [searchQuery, setSearchQuery] = useState("");
  const [segment, setSegment] = useState("frequent");
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "black",
    padding: 20,
    width: "98%",
    marginLeft: "1%",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
  };

  return (
    <View style={tw("h-full w-full bg-black items-center")}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={tw("bg-black")}>
            <View style={tw("flex-row")}>
              <Image
                source={require("../../../../assets/images/icon.jpg")}
                style={tw("w-36 h-36 mr-4")}
              ></Image>
              <View style={tw("w-48")}>
                <Text style={tw("text-white text-lg text-center")}>
                  Mermelada de frambuesa con mango y platano
                </Text>
                <Text style={tw("text-white text-lg text-center mt-10")}>
                  100 g contains
                </Text>
              </View>
            </View>
            <View style={tw("h-fit")}>
              <Macros protein={50} carbs={65} fat={70} />
            </View>
            <View>
              <Text style={tw("text-white text-lg text-center mt-6")}>
                grams you will consume:
              </Text>
            </View>
            <View>
              <Macros protein={30} carbs={120} fat={85} />
            </View>
            <View style={tw("mt-2")}>
              
            </View>
          </View>
        </Modal>
      </Portal>
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
          value={segment}
          onValueChange={setQuantity}
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
            renderItem={() => <FoodItem showModal={showModal} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default AddFood;
