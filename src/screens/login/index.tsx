import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "@/assets/logo.png"
import { styles } from "./style";
import { useState } from "react";
import { Button } from "@/components/button";

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        <Button text="Acessar" />
      </View>

      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
