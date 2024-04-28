import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { Container, Header, Item } from "./styles"


const Product = () =>{

  const navigate = useNavigate()

  const products = Array(20).fill({name: 'Product'}).map((item, index) => (`${item.name} ${index+1}`))


  return(
    <Container>
      <Header>
        <h1>Produtos</h1>
        <nav>
          <Button title="Cadastrar"/>
          <Button title='Voltar' onClick={() => navigate('/')}/>
        </nav>
      </Header>
      {
        products.map((product) => (
          <Item to='/'  key={product}>
          <span>
            {product}
          </span>
        </Item>
        ))
      }
    </Container>
  )
}

export default Product