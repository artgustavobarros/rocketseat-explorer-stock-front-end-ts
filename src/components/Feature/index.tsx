import { Container } from "./styles"
import { FeatureProps } from "./types"

const Feature = ({icon: Icon, title, to}: FeatureProps) =>{
  return(
    <Container to={to}>
      {Icon && <Icon size={42}/>}
      <footer>
        {title}
      </footer>
    </Container>
  )
}

export default Feature