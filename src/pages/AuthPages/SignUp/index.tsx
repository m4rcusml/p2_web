import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Form, Main, Text } from "./styles";

function handleSubmit(e: any) {
  e.preventDefault();
}

export function SignUp() {
  return (
    <>
      <Header />
      <Main>
        <Text>Crie sua conta</Text>

        <Form onSubmit={e => handleSubmit(e)}>
          <Input type="text" placeholder="Nome de usuário" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit" text="Criar conta" redirect="/" />
        </Form>
        
        <Button type="button" text="Voltar" redirect="/" />
      </Main>
    </>
  )
}