import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profile: {
    backgroundColor: color.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 6,
    borderBottomWidth: 1,
    borderColor: color.ligthGray
  },
  label: {
    fontSize: text.sm,
    color: color.gray
  },
  info: {
    fontSize: text.lg,
    color: color.darkGray
  }
})