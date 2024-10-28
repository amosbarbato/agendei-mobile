import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 4
  },
  danger: {
    backgroundColor: color.alert
  },
  primary: {
    backgroundColor: color.primary
  },
  text: {
    fontSize: text.md,
    color: color.white,
    textAlign: "center"
  }
})