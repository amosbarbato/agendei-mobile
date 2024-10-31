import { Alert, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

interface ButtonProps {
  text: string
  variant?: 'primary' | 'danger'
  onPress?: () => void
}

export function Button({ text, variant = 'primary', onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant == "danger" ? styles.danger : styles.primary]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
