import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "@/screens/main";
import { Services } from "@/screens/services";
import { Schedule } from "@/screens/schedule";
import { color } from "@/constants/theme";

const Stack = createNativeStackNavigator()

export function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main" component={Main}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="services" component={Services}
        options={{
          headerTitle: "Serviços",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: color.white,
          headerStyle: {
            backgroundColor: color.primary,
          }
        }}
      />

      <Stack.Screen
        name="schedule" component={Schedule}
        options={{
          headerTitle: "Faça uma reserva",
          headerTitleAlign: "center",
          headerTintColor: color.primary,
          headerStyle: {
            backgroundColor: color.white,
          }
        }}
      />
    </Stack.Navigator>
  )
}
