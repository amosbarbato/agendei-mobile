import { Text, View } from "react-native";
import { styles } from "./style";

export function Profile() {
  return (
    <View style={styles.profile}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.info}>Heber Stein Mazutti</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>heber@test.com.br</Text>
      </View>
    </View>
  )
}
