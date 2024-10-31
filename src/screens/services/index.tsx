import { FlatList, Image, Text, View } from "react-native";
import { CardService } from "@/components/service";
import { doctors_services } from "@/constants/data";
import icon from "@/constants/icon";
import { styles } from "./style";

export function Services({ navigation, route }: any) {
  const id_doctor = route.params.id_doctor
  const name = route.params.name
  const specialty = route.params.specialty
  const iconDoctor = route.params.icon

  function handleClick(id_service: number) {
    navigation.navigate("schedule", {
      id_service, id_doctor
    })

    console.log("Clicou: " + id_service)
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === "M" ? icon.male : icon.female} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        data={doctors_services}
        keyExtractor={(service) => service.id_service.toString()}
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
