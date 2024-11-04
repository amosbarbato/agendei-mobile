import api from "@/constants/api";
import { useState } from "react";
import { Alert } from "react-native";

export function useBooking(navigation: any) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  async function confirmBooking(id_doctor: number, id_service: number) {
    try {
      const response = await api.post("/appointments", {
        id_doctor,
        id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour
      })

      if (response.data?.id_appointment) {
        navigation.popToTop()
      }
    }
    catch (error: any) {
      Alert.alert(error.response?.data.error)
    }
  }

  return {
    selectedDate,
    setSelectedDate,
    selectedHour,
    setSelectedHour,
    confirmBooking
  }
}