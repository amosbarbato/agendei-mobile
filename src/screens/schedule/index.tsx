import { Alert, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import { useBooking } from "@/hooks/useBooking";
import api from "@/constants/api";
import { ptBR } from "@/constants/calendar";
import { Button } from "@/components/button";
import { styles, theme } from "./style";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

export function Schedule({ navigation, route }: any) {
  const { id_doctor, id_service } = route.params
  const {
    selectedDate,
    setSelectedDate,
    selectedHour,
    setSelectedHour,
    confirmBooking,
  } = useBooking(navigation);

  return (
    <View style={styles.container}>
      <Calendar
        theme={theme}
        style={styles.calendar}
        onDayPress={(day) => { setSelectedDate(day.dateString) }}
        markedDates={{ [selectedDate]: { selected: true } }}
        minDate={new Date().toDateString().split("T")[0]}
      />

      <View style={styles.content}>
        <View>
          <Text style={styles.textLabel}>Horário</Text>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(value) => { setSelectedHour(value) }}
            style={styles.picker}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
          </Picker>
        </View>

        <View>
          <Button
            text="Confirmar reserva"
            onPress={() => confirmBooking(id_doctor, id_service)}
          />
        </View>
      </View>
    </View>
  )
}
