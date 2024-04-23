import { Container, Form } from "./styles";
import { useState } from 'react';
import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import Input from "../../components/Input";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Container>
      <Form>
        <h1>Faça seu login</h1>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
        />

        <Link to="/register">
          <FiUserPlus />
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}

export default SignIn