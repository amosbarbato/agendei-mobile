import { FlatList, Text, View } from "react-native";
import { useHome } from "@/hooks/useHome";
import { CardDoctor } from "@/components/doctor";
import { styles } from "./style";

export function Home() {
  const { doctors, loadingDoctors, handleClick } = useHome()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        refreshing={loadingDoctors}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardDoctor
              id_doctor={item.id_doctor}
              icon={item.icon} // M ou F
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