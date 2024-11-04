import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignup } from "@/hooks/useSignup";
import { Button } from "@/components/button";
import logo from "@/assets/logo.png"
import { styles } from "./style";

export function Signup({ navigation }: any) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    navigateToLogin
  } = useSignup(navigation)

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
        <Button text="Criar Conta" onPress={handleSignup} />
      </View>

      <View style={styles.footer}>
        <Text>Já tenho uma conta. </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.footerLink}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
