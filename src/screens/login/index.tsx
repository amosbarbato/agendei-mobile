import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/button";
import logo from "@/assets/logo.png"
import { styles } from "./style";

export function Login({ navigation }: any) {
  const { email, setEmail, password, setPassword, handleLogin, navigateToSignup } = useLogin(navigation)

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
        <Button text="Acessar" onPress={handleLogin} />
      </View>

      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.footerLink}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
