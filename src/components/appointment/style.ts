import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appointment: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: color.ligthGray
  },
  name: {
    fontSize: text.lg,
    fontWeight: "500",
    color: color.darkGray
  },
  specialty: {
    marginTop: 6,
    fontSize: text.sm,
    color: color.gray
  },
  container: {
    flexDirection: "row",
    marginTop: 6,
  },
  containerBooking: {
    flex: 1,
    gap: 6
  },
  booking: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  },
  icon: {
    width: 25,
    height: 25
  },
  bookingText: {
    color: color.gray
  }
})