import { Container } from "./styles"
import Header from "../../components/Header"
import Feature from "../../components/Feature"
import { FiShoppingCart, FiTag, FiTruck } from "react-icons/fi"
import { useAuth } from "../../hooks/context/useAuth"
import { USER_ROLE } from "../../utils/roles"

const Home = () =>{

  const {data} = useAuth()

  const role = data.user.role

  return(
    <Container>
      <Header/>
      <main>
        <Feature title='Produto' icon={FiTag} to='/product'/>
        {
          role === USER_ROLE.ADMIN && 
            <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
        } 
        {
          [USER_ROLE.ADMIN, USER_ROLE.SALE].includes(role) && 
            <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
        }
      </main>
    </Container>
  )
}

export default Home