import { CardAppointment } from "@/components/appointment";
import { appointments } from "@/constants/data";
import { FlatList, View } from "react-native";
import { styles } from "./style";

export function Calendar() {
  return (
    <View style={styles.container}>

      <FlatList
        data={appointments}
        keyExtractor={(doctor) => doctor.id_appointment.toString()}
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
            />
          )
        }}
      />
    </View>
  )
}
