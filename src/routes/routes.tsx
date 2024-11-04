import { useContext } from "react"
import { RoutesOpen } from "./routeOpen"
import { RoutesPrivate } from "./routePrivate"
import { AuthContext } from "@/contexts/auth"

export function Routes() {
  const { user } = useContext(AuthContext)

  return user.id_user ? (
    <RoutesPrivate />
  ) : (
    <RoutesOpen />
  )
}
