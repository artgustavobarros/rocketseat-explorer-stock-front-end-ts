import { FiLogOut, FiUser } from "react-icons/fi"
import { Container, User } from "./styles"

const Header = () =>{
  return(
    <Container>
      <h1>Menu</h1>

      <aside>
        <User>
            <span>Olá, <strong>Arthur</strong></span>
            <small>
              <FiUser/> Perfil do usuário 
            </small>
        </User>
      </aside>

      <button type="button">
        <FiLogOut size={24}/>
      </button>
    </Container>
  )
}

export default Header