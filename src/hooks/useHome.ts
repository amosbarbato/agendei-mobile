import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import api from "@/constants/api";
import { Doctor } from "@/utils/interfaces";

export function useHome() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loadingDoctors, setLoadingDoctors] = useState(false)
  const navigation = useNavigation()

  async function fetchDoctors() {
    setLoadingDoctors(true)
    try {
      const response = await api.get("/doctors")
      if (response.data) setDoctors(response.data)
    } catch (error: any) {
      Alert.alert(error.response?.data.error)
      setLoadingDoctors(false)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  function handleClick(id_doctor: number, name: string, specialty: string, icon: string) {
    navigation.navigate("services", { id_doctor, name, specialty, icon });
  }

  return { doctors, loadingDoctors, handleClick }
}