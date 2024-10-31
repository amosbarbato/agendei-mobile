import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "@/constants/api";
import { Button } from "@/components/button";
import logo from "@/assets/logo.png"
import { styles } from "./style";

export function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function goToLogin() {
    try {
      const response = await api.post("/users/login", {
        email, password
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
    navigation.navigate("signup")
    console.log("Criar conta agora")
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View>
        <View style={styles.containerInput}>
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
        <Button text="Acessar" onPress={goToLogin} />
      </View>

      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.footerLink}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
