import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: text.md,
    color: color.dark,
    marginLeft: 12,
    marginBottom: 16
  },
  doctors: {
    gap: 12
  }
})