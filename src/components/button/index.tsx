import { Alert, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

interface ButtonProps {
  text: string
  variant?: 'primary' | 'danger'
}

export function Button({ text, variant = 'primary' }: ButtonProps) {

  function TesteClick() {
    Alert.alert("Clicou no nosso botão");
  }
  return (
    <TouchableOpacity
      style={[styles.button, variant == "danger" ? styles.danger : styles.primary]}
      onPress={TesteClick}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
