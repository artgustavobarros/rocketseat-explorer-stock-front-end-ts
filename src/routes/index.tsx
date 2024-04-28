import { RouterProvider } from "react-router-dom"
import { useAuth } from "../hooks/context/useAuth"
import { appRoutes, authRoutes } from "./route-paths"

const Routes = () =>{

  const {user} = useAuth()

  return(
    <RouterProvider router={user? appRoutes: authRoutes}/>
  )
}

export default Routes