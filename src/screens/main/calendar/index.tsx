import { FlatList, View } from "react-native";
import { CardAppointment } from "@/components/appointment";
import { useAppointments } from "@/hooks/useAppointments";
import { styles } from "./style";

export function Calendar() {
  const { appointments, deleteAppointments } = useAppointments()

  return (   
    <View style={styles.container}>
      <FlatList
        data={appointments}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardAppointment
              id_appointment={item.id_appointment}
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
              booking_date={item.booking_date}
              booking_hour={item.booking_hour}
              onPress={() => deleteAppointments(item.id_appointment)}
            />
          )
        }}
      />
    </View>
  )
}
