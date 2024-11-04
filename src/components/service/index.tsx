import { Text, View } from "react-native";
import { formatPrice } from "@/utils/format";
import { Service } from "@/utils/interfaces";
import { Button } from "../button";
import { styles } from "./styles";

interface ServiceProps extends Service {
  onPress: () => void
}

export function CardService({ id_service, service, price, onPress }: ServiceProps) {
  return (
    <View style={styles.container} key={id_service}>
      <View style={styles.containerService}>
        <Text style={styles.service}>{service}</Text>
        <Text style={styles.price}>{formatPrice(price)}</Text>
      </View>

      <Button text="Agendar" onPress={onPress} />
    </View>
  )
}
