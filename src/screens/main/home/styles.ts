import { text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flex: 1
  },
  title: {
    fontSize: text.lg,
    marginVertical: 4
  },
  doctors: {
    gap: 12
  }
})