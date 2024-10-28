import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: 24
  },
  banner: {
    backgroundColor: color.primary,
    alignItems: "center",
    paddingVertical: 36,
  },
  icon: {
    height: 80,
    width: 80
  },
  name: {
    color: color.white,
    fontSize: text.lg,
    fontWeight: "700",
    marginTop: 6
  },
  specialty: {
    fontSize: text.md,
    color: color.white,
  },
})