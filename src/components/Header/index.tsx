import { FiLogOut, FiUser } from "react-icons/fi"
import { Container, User } from "./styles"
import { useAuth } from "../../hooks/context/useAuth"

const Header = () =>{

  const {signOut} = useAuth()

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

      <button type="button" onClick={signOut}>
        <FiLogOut size={24}/>
      </button>
    </Container>
  )
}

export default Header