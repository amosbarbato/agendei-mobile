import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar } from "./calendar";
import { Home } from "./home";
import { Profile } from "./profile";
import { Image } from "react-native";
import icon from "@/constants/icon";
import { color } from "@/constants/theme";

const Tab = createBottomTabNavigator()

export function Main() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => {
              return (
                <Image
                  source={icon.logo}
                  style={{ width: 140, height: 32, }}
                />
              )
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.home}
                  style={{ width: 45, height: 45, opacity: focused ? 1 : 0.3 }}
                />
              )
            }
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            headerTitleAlign: "center",
            headerTitle: "Minhas Reservas",
            headerTintColor: `${color.primary}`,
            headerShadowVisible: true,
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.calendar}
                  style={{ width: 45, height: 45, opacity: focused ? 1 : 0.3 }}
                />
              )
            }
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerTitleAlign: "center",
            headerTitle: "Meu Perfil",
            headerTintColor: `${color.primary}`,
            headerShadowVisible: true,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.profile}
                  style={{ width: 45, height: 45, opacity: focused ? 1 : 0.3 }}
                />
              )
            }
          }}
        />

    </Tab.Navigator>
  )
}
