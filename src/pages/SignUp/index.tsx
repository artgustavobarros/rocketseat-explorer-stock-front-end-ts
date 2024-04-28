import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { api } from "../../services/api/api";

const SignUp = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async () =>{
    if (!name || !email || !password){
      return alert('Fill out all fields')
    }

    try{
      await api.post('/users', {name, email, password})
      alert('Registration completed sucessfully')
      navigate('/')
    }catch(err){
      if(err){
        alert(err.response.data.message)
      }else{
        alert('Não foi possível realizar o cadastro')
      }
    }
  }


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
          onClick={handleSignUp}
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