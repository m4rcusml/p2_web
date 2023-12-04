import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Form, Main, Text } from "./styles";

function handleSubmit(e: any) {
  e.preventDefault();
  console.log('Clicou em cadastrar');
  
}

export function SignUp() {
  return (
    <>
      <Header />
      <Main>
        <Text>Crie sua conta</Text>

        <Form onSubmit={e => handleSubmit(e)}>
          <Input />
          <Input />
          <Input />
          <Button />
        </Form>
        
        <Button />
      </Main>
    </>
  )
}