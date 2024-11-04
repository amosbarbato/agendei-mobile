import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icon from "@/constants/icon";
import { color } from "@/constants/theme";
import { Calendar } from "./calendar";
import { Home } from "./home";
import { Profile } from "./profile";

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
                  style={{ marginTop: 20, width: 140, height: 32, }}
                />
              )
            },
            tabBarStyle: { height: 60 },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.home}
                  style={{ width: 40, height: 40, opacity: focused ? 1 : 0.3 }}
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
            tabBarStyle: { height: 60 },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.calendar}
                  style={{ width: 40, height: 40, opacity: focused ? 1 : 0.3 }}
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
            tabBarStyle: { height: 60 },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.profile}
                  style={{ width: 40, height: 40, opacity: focused ? 1 : 0.3 }}
                />
              )
            }
          }}
        />

    </Tab.Navigator>
  )
}
