import { CardService } from "@/components/service";
import icon from "@/constants/icon";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { doctors_services } from "@/constants/data";

export function Services({ navigation }: any) {

  function handleClick(id_service: number) {
    navigation.navigate("schedule")

    console.log("Clicou: " + id_service)
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} style={styles.icon} />
        <Text style={styles.name}>Dra. Nise da Silveira</Text>
        <Text style={styles.specialty}>Cirurgia Plástica</Text>
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
