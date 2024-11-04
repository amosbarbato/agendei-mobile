import { StyleSheet } from "react-native";
import { color, text } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  banner: {
    backgroundColor: color.primary,
    alignItems: "center",
    paddingBottom: 36,
    paddingTop: 18,
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