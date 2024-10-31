import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@/screens/login";
import { Signup } from "@/screens/signup";

const Stack = createNativeStackNavigator()

export function RoutesOpen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="signup" component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
