import { ptBR } from "@/constants/calendar";
import { Text, View } from "react-native";
import { Calendar, CalendarProps, type DateData, LocaleConfig } from "react-native-calendars";
import { styles, theme } from "./style";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button } from "@/components/button";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

export function Schedule({ route }: any) {
  const [day, setDay] = useState<DateData>()
  const [hour, setHour] = useState('')
  const id_doctor = route.params.id_doctor
  const id_service = route.params.id_doctor


  function handleClick() {
    console.log(id_doctor, id_service, day, hour)
  }

  return (
    <View style={styles.container}>
      <Calendar
        theme={theme}
        style={styles.calendar}
        onDayPress={setDay => {
          console.log('selected day', setDay);
        }}
        markedDates={day && {
          [day.dateString]: { selected: true }
        }}
        minDate={new Date().toDateString()}
      />

      <View style={styles.content}>
        <View>
          <Text style={styles.textLabel}>Horário</Text>
          <Picker
            selectedValue={hour}
            onValueChange={(value, index) => { setHour(value) }}
            style={styles.picker}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
          </Picker>
        </View>

        <View>
          <Button text="Confirmar reserva" onPress={handleClick} />
        </View>
      </View>
    </View>
  )
}
