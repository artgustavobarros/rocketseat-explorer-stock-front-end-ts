import { Container } from "./styles"
import { ButtonProps } from "./types"

const Button = ({title, ...rest}: ButtonProps) =>{
  return(
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}

export default Button