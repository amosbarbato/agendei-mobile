import icon from "@/constants/icon";
import { Image, Text, View } from "react-native";
import { Button } from "../button";
import { styles } from "./style";
import { formatDate } from "@/utils/format-date";

interface CardAppointmentProps {
  id_appointment: number,
  service: string,
  doctor: string,
  specialty: string,
  booking_date: string,
  booking_hour: string,
}

export function CardAppointment({
  id_appointment, service, doctor, specialty, booking_date, booking_hour
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
          <Button text="Cancelar Reserva" variant="danger" />
        </View>
      </View>
    </View>
  )
}
