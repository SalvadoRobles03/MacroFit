import { Text, TextInput, Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAllProfiles } from "@/src/api/profile-api";
import { ProfileContext } from "@/src/Auth/ProfileContext";

const SelectProfile = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { selectProfile } = useContext(ProfileContext);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profilesData = await getAllProfiles();
        setProfiles(profilesData);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <View style={tw("flex w-full bg-black items-center")}>
      <View style={tw("w-full flex-row justify-center items-center mt-8")}>
        <Text style={tw("text-white text-3xl")}>Select Profile</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("CreateProfile");
        }}
        style={tw("mt-2 bg-black text-white border-2 border-white")}
      >
        <Text style={tw("text-white text-large")}>Create Profile</Text>
      </Button>
      <ScrollView
        style={tw("w-[90%] ")}
        contentContainerStyle={tw("items-center")}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {profiles.map((profile) => (
          <Button key={profile.id} style={tw("w-full p-4 border-2 border-white mt-4")} onPress={() => selectProfile(profile.id)}>
            <Text style={tw("text-white text-xl")}>{profile.name}</Text>
          </Button>
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectProfile;
