import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Container>
      <Form>
        <h1>Crie a sua conta</h1>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

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
          title="Cadastrar"
        />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}

export default SignUp