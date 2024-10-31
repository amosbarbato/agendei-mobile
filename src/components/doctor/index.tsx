import {
  Image,
  type ImageSourcePropType,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import icon from "@/constants/icon"
import { styles } from "./style";

interface CardDoctorProps {
  iconDoctor: string
  id_doctor: number
  name: string
  specialty: string
  onPress: () => void
}

export function CardDoctor({ iconDoctor, name, specialty, onPress }: CardDoctorProps) {
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
