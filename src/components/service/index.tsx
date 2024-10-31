import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../button";
import { formatPrice } from "@/utils/format";

interface CardServiceProps {
  id_service: number
  service: string
  price: number
  onPress: () => void
}

export function CardService({ service, price, onPress }: CardServiceProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerService}>
        <Text style={styles.service}>{service}</Text>
        <Text style={styles.price}>{formatPrice(price)}</Text>
      </View>

      <Button text="Agendar" onPress={onPress} />
    </View>
  )
}
