import { color, text } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  doctor: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: color.ligthGray,
    borderRadius: 4,
    backgroundColor: color.white
  },
  name: {
    fontSize: text.md,
    fontWeight: "500",
    color: color.darkGray
  },
  specialty: {
    marginTop: 3,
    fontSize: text.sm,
    color: color.gray
  },
  icon: {
    width: 50,
    height: 50
  },
})