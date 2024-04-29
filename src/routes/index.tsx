import { RouterProvider } from "react-router-dom"
import { useAuth } from "../hooks/context/useAuth"
import { authRoutes } from "./auth-routes"
import { USER_ROLE } from "../utils/roles"
import { adminRoutes } from "./admin-routes"
import { saleRoutes } from "./sale-routes"
import { customerRoutes } from "./customer-routes"

const Routes = () =>{

  const {data} = useAuth()

  const role = data.user.role
  
  const acessRoutes = () =>{
    switch(role){
      case USER_ROLE.ADMIN:
        return adminRoutes
      case USER_ROLE.SALE:
        return saleRoutes
      case USER_ROLE.CUSTOMER:
        return customerRoutes
      default:
        return customerRoutes
    }
  }

  return(
    <RouterProvider router={role? acessRoutes(): authRoutes}/>
  )
}

export default Routes