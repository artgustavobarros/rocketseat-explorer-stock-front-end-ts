import { Container } from "./styles"
import Header from "../../components/Header"
import Feature from "../../components/Feature"
import { FiShoppingCart, FiTag, FiTruck } from "react-icons/fi"

const Home = () =>{
  return(
    <Container>
      <Header/>
      <main>
        <Feature title='Produto' icon={FiTag} to='/product'/>
        <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
        <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
      </main>
    </Container>
  )
}

export default Home