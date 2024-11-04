import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "@/contexts/auth";
import api from "@/constants/api";
import { UserProfile } from "@/utils/interfaces";

export function useProfile() {
  const { setUser } = useContext(AuthContext)
  const [profile, setProfile] = useState<UserProfile>({ name: "", email: "" })

  async function fetchProfile() {
    try {
      const response = await api.get("/users/profile")
      if (response.data?.name) {
        setProfile({
          name: response.data.name, email: response.data.email
        })
      }
    } catch (error: any) {
      Alert.alert(error.response?.data.error);
    }
  }

  function logout() {
    api.defaults.headers.common['Authorization'] = "";
    setUser({});
  }

  useEffect(() => {
    fetchProfile();
  });

  return { profile, logout }
}