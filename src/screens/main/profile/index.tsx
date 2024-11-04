import { Text, View } from "react-native";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/button";
import { styles } from "./style";

export function Profile() {
  const { profile, logout } = useProfile()

  return (
    <View style={styles.profile}>
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.info}>{profile.name}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>{profile.email}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Logout" onPress={logout} />
      </View>
    </View>
  )
}
