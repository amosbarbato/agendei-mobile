import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: color.ligthGray
  },
  containerService: {
    flex: 1,
    gap: 2
  },
  service: {
    fontSize: text.lg,
    color: color.darkGray,
    fontWeight: "500"
  },
  price: {
    color: color.primary,
    fontSize: text.md,
    fontWeight: "500"
  },
})