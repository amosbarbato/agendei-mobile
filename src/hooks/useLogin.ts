import { useContext, useState } from "react"
import { Alert } from "react-native"
import api from "@/constants/api"
import { AuthContext } from "@/contexts/auth"

export function useLogin(navigation: any) {
  const { setUser } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post("/users/login", { email, password })

      if (response.data) {
        api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token
        setUser(response.data)
      }
    } catch (error: any) {
      Alert.alert(error.response?.data.error)
    }
  }

  function navigateToSignup() {
    navigation.navigate("signup")
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    navigateToSignup,
  }
}