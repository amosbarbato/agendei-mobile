import { Alert, FlatList, Image, Text, View } from "react-native";
import { CardService } from "@/components/service";
import icon from "@/constants/icon";
import { styles } from "./style";
import { useEffect, useState } from "react";
import api from "@/constants/api";
import { useServices } from "@/hooks/useServices";

// export function Services({ navigation, route }: any) {
//   const [doctorsServices, setDoctorsServices] = useState([])
//   const id_doctor = route.params.id_doctor
//   const name = route.params.name
//   const specialty = route.params.specialty
//   const iconDoctor = route.params.icon

//   async function loadServices() {
//     try {
//       const response = await api.get("/doctors/" + id_doctor + "/services")

//       if (response.data) {
//         setDoctorsServices(response.data)
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
//     loadServices()
//   }, [])

//   function handleClick(id_service: number) {
//     navigation.navigate("schedule", {
//       id_service, id_doctor
//     })

//     console.log("Clicou: " + id_service)
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.banner}>
//         <Image source={iconDoctor === "M" ? icon.male : icon.female} style={styles.icon} />
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.specialty}>{specialty}</Text>
//       </View>

//       <FlatList
//         data={doctorsServices}
//         keyExtractor={(service) => service.id_service.toString()}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => {
//           return (
//             <CardService
//               id_service={item.id_service}
//               service={item.description}
//               price={item.price}
//               onPress={() => handleClick(item.id_service)}
//             />
//           )
//         }}

//       />
//     </View>
//   )
// }

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