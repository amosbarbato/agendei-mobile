import { FlatList, Image, Text, View } from "react-native";
import { CardService } from "@/components/service";
import { useServices } from "@/hooks/useServices";
import icon from "@/constants/icon";
import { styles } from "./style";

export function Services({ route }: any) {
  const { id_doctor, name, specialty, icon: iconDoctor } = route.params
  const { services, handleClick } = useServices(id_doctor)

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === "M" ? icon.male : icon.female} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        data={services}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardService
              id_service={item.id_service}
              service={item.description}
              price={item.price}
              onPress={() => handleClick(item.id_service)}
            />
          )
        }}
      />
    </View>
  )
}