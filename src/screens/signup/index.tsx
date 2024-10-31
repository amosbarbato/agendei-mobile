import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "@/constants/api";
import { Button } from "@/components/button";
import logo from "@/assets/logo.png"
import { styles } from "./style";

export function Signup({ navigation }: any) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function goToSign() {
    try {
      const response = await api.post("/users/register", {
        name, email, password
      })

      if (response.data) {
        console.log(response.data)
      }
    }
    catch (error: any) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert("Ocorre um erro. Tente novamente mais tarde.")
    }
  }

  function handleClick() {
    navigation.navigate("login")
    console.log("Fazer Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button text="Criar Conta" onPress={goToSign} />
      </View>

      <View style={styles.footer}>
        <Text>Já tenho uma conta. </Text>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.footerLink}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
