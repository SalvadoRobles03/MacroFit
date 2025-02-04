import React, { createContext, useState, useEffect, ReactNode } from "react";
import { saveProfile, getProfile, getAllProfiles } from "../api/profile-api";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      }
    };

    loadSelectedProfile();
  }, []);

  const registerProfile = async (profile: Profile) => {
    await saveProfile(profile);
    const newProfile = await getProfile(profile.id);
    if (newProfile) {
      setProfile(newProfile);
      await AsyncStorage.setItem("selectedProfileId", newProfile.id.toString());
    } else {
      console.log("Error al obtener el nuevo perfil");
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
