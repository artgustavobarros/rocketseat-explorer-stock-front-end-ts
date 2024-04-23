import { Container } from './styles';
import { InputProps } from './types';

const Input = ({ icon: Icon, ...rest }: InputProps) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

export default Input