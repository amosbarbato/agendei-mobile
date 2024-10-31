import { RoutesOpen } from "./routeOpen"
import { RoutesPrivate } from "./routePrivate"

export function Routes() {
  const user = { id_user: 1 }

  return user.id_user ? (
    <RoutesPrivate />
  ) : (
    <RoutesOpen />
  )
}
