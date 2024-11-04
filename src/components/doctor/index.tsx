import { Image, Text, TouchableOpacity, View } from "react-native";
import { Doctor } from "@/utils/interfaces";
import icon from "@/constants/icon"
import { styles } from "./style";

interface DoctorProps extends Doctor {
  onPress: () => void
}

export function CardDoctor({ icon: iconDoctor, name, specialty, onPress }: DoctorProps) {
  return (
    <TouchableOpacity style={styles.doctor} onPress={onPress}>
      <Image source={iconDoctor === "M" ? icon.male : icon.female} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}
