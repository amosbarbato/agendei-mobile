import {
  Image,
  type ImageSourcePropType,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./style";

interface CardDoctorProps {
  icon: ImageSourcePropType
  name: string
  specialty: string
}

export function CardDoctor({ icon, name, specialty }: CardDoctorProps) {
  return (
    <TouchableOpacity style={styles.doctor}>
      <Image source={icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}
