import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import api from "@/constants/api";
import { Service } from "@/utils/interfaces";

export function useServices(id_doctor: number) {
  const [services, setServices] = useState<Service[]>([])
  const navigation = useNavigation()

  async function fetchServices() {
    try {
      const response = await api.get(`/doctors/${id_doctor}/services`)
      if (response.data) setServices(response.data)
    } catch (error: any) {
      Alert.alert(error.response?.data.error)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [id_doctor])

  function handleClick(id_service: number) {
    navigation.navigate("schedule", { id_doctor, id_service });
  }

  return { services, handleClick }
}