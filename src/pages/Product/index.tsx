import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { Container, Header, Item } from "./styles"

const Product = () =>{

  const navigate = useNavigate()

  return(
    <Container>
      <Header>
        <h1>Produtos</h1>
        <nav>
          <Button title="Cadastrar"/>
          <Button title='Voltar' onClick={() => navigate('/')}/>
        </nav>
      </Header>
      <Item to='/'>
        <span>
          Produtos
        </span>
      </Item>
    </Container>
  )
}

export default Product