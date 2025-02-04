import React, { createContext, useState, useEffect, ReactNode } from "react";
import { saveProfile, getProfile, getAllProfiles } from "../api/profile-api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface ProfileContextType {
  profile: Profile | null;
  registerProfile: (profile: Profile) => Promise<void>;
  selectProfile: (id: number) => Promise<void>;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const loadSelectedProfile = async () => {
      try {
        const selectedProfileId = await AsyncStorage.getItem(
          "selectedProfileId"
        );
        if (selectedProfileId !== null) {
          const profile = await getProfile(parseInt(selectedProfileId));
          if (profile) {
            setProfile(profile);
          } else {
            // Si el perfil no existe, limpiamos el almacenamiento
            await AsyncStorage.removeItem("selectedProfileId");
          }
        } else {
          // Si no hay perfil seleccionado, cargar el primer perfil disponible o dejarlo nulo
          const profiles = (await getAllProfiles()) as Profile[];
          if (profiles.length > 0) {
            setProfile(profiles[0]);
          }
        }
      } catch (error) {
        console.log("Error al cargar el perfil desde AsyncStorage:", error);
        navigation.navigate("InternalError");
      }
    };

    loadSelectedProfile();
  }, []);

  const registerProfile = async (profile: Profile) => {
    try {
      await saveProfile(profile);
      if (profile.id) {
        const newProfile = await getProfile(profile.id);
        if (newProfile) {
          setProfile(newProfile);
          await AsyncStorage.setItem(
            "selectedProfileId",
            newProfile.id ? newProfile.id.toString() : ""
          );
        } else {
          console.log("Error al obtener el nuevo perfil");
        }
      }
    } catch (error) {
      console.error("Error en registerProfile:", error);
      navigation.navigate("InternalError");
    }
  };

  const selectProfile = async (id: number) => {
    try {
      const profile = await getProfile(id);
      if (profile) {
        setProfile(profile);
        await AsyncStorage.setItem("selectedProfileId", id.toString());
      } else {
        console.log("Perfil no encontrado");
      }
    } catch (error) {
      console.log("Error al seleccionar el perfil:", error);
      navigation.navigate("InternalError");
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profile, registerProfile, selectProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
