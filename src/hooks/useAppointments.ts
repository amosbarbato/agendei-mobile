import { useEffect, useState } from "react";
import { Alert } from "react-native";
import api from "@/constants/api";
import { Appointment } from "@/utils/interfaces";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  async function fetchAppointments() {
    try {
      const response = await api.get("/appointments")
      if (response.data) setAppointments(response.data)
    } catch (error: any) {
      Alert.alert(error.response?.data.error);
    }
  }

  async function deleteAppointments(id_appointment: number) {
    try {
      const response = await api.delete(`/appointments/${id_appointment}`)
      if (response.status === 200) fetchAppointments()
    } catch (error: any) {
      Alert.alert(error.response?.data.error);
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return { appointments, deleteAppointments }
}