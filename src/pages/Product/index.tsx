import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { Container, Header, Item } from "./styles"
import { useAuth } from "../../hooks/context/useAuth"
import { USER_ROLE } from "../../utils/roles"


const Product = () =>{

  const navigate = useNavigate()
  const {data} = useAuth()

  const role = data.user.role

  const products = Array(20).fill({name: 'Product'}).map((item, index) => (`${item.name} ${index+1}`))


  return(
    <Container>
      <Header>
        <h1>Produtos</h1>
        <nav>
          {
            [USER_ROLE.ADMIN, USER_ROLE.SALE].includes(role) && <Button title="Cadastrar"/>
          }
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