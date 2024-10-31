import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    padding: 10,
    borderBottomWidth: 1,
    borderEndColor: color.ligthGray
  },
  content: {
    padding: 20,
    paddingTop: 40,
    justifyContent: "space-between",
    flex: 1
  },
  textLabel: {
    fontSize: text.lg,
    fontWeight: "500",
    color: color.darkGray,
  },
  picker: {
    backgroundColor: color.clean,
    marginTop: 10,
  }
})

export const theme = {
  textMonthFontSize: 18,
  monthTextColor: color.darkGray,
  todayTextColor: color.alert,
  selectedDayBackgroundColor: color.primary,
  selectedDayTextColor: color.white,
  arrowColor: color.darkGray
}