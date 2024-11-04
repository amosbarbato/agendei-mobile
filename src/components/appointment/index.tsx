import { Image, Text, View } from "react-native";
import icon from "@/constants/icon";
import { Button } from "../button";
import { Appointment } from "@/utils/interfaces";
import { formatDate } from "@/utils/format";
import { styles } from "./style";

interface CardAppointmentProps extends Appointment {
  onPress: (id_appointment: number) => void
}

export function CardAppointment({
  id_appointment, service, doctor, specialty, booking_date, booking_hour, onPress
}: CardAppointmentProps) {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>{service} - {doctor}</Text>
      <Text style={styles.specialty}>{specialty}</Text>

      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image source={icon.calendar} style={styles.icon} />
            <Text style={styles.bookingText}>{formatDate(booking_date)}</Text>
          </View>

          <View style={styles.booking}>
            <Image source={icon.clock} style={styles.icon} />
            <Text style={styles.bookingText}>{booking_hour}h</Text>
          </View>
        </View>
        <View>
          <Button
            text="Cancelar Reserva"
            variant="danger"
            onPress={() => onPress(id_appointment)}
          />
        </View>
      </View>
    </View>
  )
}
