import { useState, useEffect } from "react";
import { hasActualMacros } from "@/src/api/macros-api";

const useActualMacros = (profile: Profile) => {
  const [actualMacros, setActualMacros] = useState<boolean>(false);

  const checkActualMacros = async () => {
    try {
      if (profile && profile.id) {
        const result = await hasActualMacros(profile.id);
        setActualMacros(result);
      }
    } catch (error) {
      console.error("Error checking actual macros:", error);
    }
  };

  useEffect(() => {
    checkActualMacros();
  }, [profile]);

  return actualMacros;
};

export default useActualMacros;
