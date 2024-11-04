import { StyleSheet } from "react-native";
import { color } from "@/constants/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    color: color.gray,
    flex: 1,
    justifyContent: "space-between",
    padding: 40,
  },
  containerLogo: {
    alignItems: "center",
    marginTop: 40
  },
  logo: {
    width: 140,
    height: 32,
  },
  containerInput: {
    gap: 15,
    marginBottom: 15
  },
  input: {
    padding: 14,
    backgroundColor: color.clean,
    color: color.gray,
    borderRadius: 4,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  footerLink: {
    color: color.primary
  }
})