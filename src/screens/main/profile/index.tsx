import { Alert, Text, View } from "react-native";
import { styles } from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/auth";
import api from "@/constants/api";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/button";

export function Profile() {
  const { profile, logout } = useProfile()

  return (
    <View style={styles.profile}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.info}>{profile.name}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>{profile.email}</Text>
      </View>

      <Button text="Logout" onPress={logout} />
    </View>
  )
}
