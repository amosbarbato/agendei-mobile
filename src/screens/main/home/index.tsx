import { Alert, FlatList, Text, View } from "react-native";
import { CardDoctor } from "@/components/doctor";
import { styles } from "./style";
import { useEffect, useState } from "react";
import api from "@/constants/api";
import { useHome } from "@/hooks/useHome";

// export function Home({ navigation }: any) {
//   const [doctors, setDoctors] = useState([])

//   async function loadDoctors() {
//     try {
//       const response = await api.get("/doctors")

//       if (response.data) {
//         setDoctors(response.data)
//       }
//     }
//     catch (error: any) {
//       if (error.response?.data.error)
//         Alert.alert(error.response.data.error)
//       else
//         Alert.alert("Ocorre um erro. Tente novamente mais tarde.")
//     }
//   }

//   useEffect(() => {
//     loadDoctors()
//   }, [])

//   function handleClick(id_doctor: number, name: string, specialty: string, icon: string) {
//     navigation.navigate("services", {
//       id_doctor, name, specialty, icon
//     })

//     console.log(id_doctor, name, specialty, icon)
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Agende os seus serviços médicos</Text>

//       <FlatList
//         data={doctors}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => {
//           return (
//             <CardDoctor
//               id_doctor={item.id_doctor}
//               iconDoctor={item.icon} // M ou F
//               name={item.name}
//               specialty={item.specialty}
//               onPress={() => handleClick(item.id_doctor, item.name, item.specialty, item.icon)}
//             />
//           )
//         }}
//         ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
//       />
//     </View>
//   )
// }

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