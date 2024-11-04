import { useState } from "react";
import { Alert } from "react-native";
import api from "@/constants/api";

export function useSignup(navigation: any) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignup() {
    try {
      const response = await api.post("/users/register", { name, email, password })

      if (response.data) {
        Alert.alert("Conta criada com sucesso!", "Você já pode fazer login.")
        navigation.navigate("login")
      }
    } catch (error: any) {
      Alert.alert(error.response?.data.error)
    }
  }

  function navigateToLogin() {
    navigation.navigate("login")
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    navigateToLogin,
  }
}