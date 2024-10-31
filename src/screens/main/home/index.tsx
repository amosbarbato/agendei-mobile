import { FlatList, Text, View } from "react-native";
import { doctors } from "@/constants/data";
import { CardDoctor } from "@/components/doctor";
import { styles } from "./style";

export function Home({ navigation }: any) {

  function handleClick(id_doctor: number, name: string, specialty: string, icon: string) {
    navigation.navigate("services")

    console.log(id_doctor, name, specialty, icon)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardDoctor
              id_doctor={item.id_doctor}
              iconDoctor={item.icon} // M ou F
              name={item.name}
              specialty={item.specialty}
              onPress={() => handleClick(item.id_doctor, item.name, item.specialty, item.icon)}
            />
          )
        }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  )
}
