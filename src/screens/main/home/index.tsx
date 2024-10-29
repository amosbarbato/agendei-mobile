import { FlatList, Text, View } from "react-native";
import { doctors } from "@/constants/data";
import { CardDoctor } from "@/components/doctor";
import icon from "@/constants/icon";
import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CardDoctor
              icon={item.icon === "M" ? icon.male : icon.female}
              name={item.name}
              specialty={item.specialty}
            />
          )
        }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  )
}
