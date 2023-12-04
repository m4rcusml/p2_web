import { Form, Main, Subtitle, Title } from './styles';
import { Header } from "../components/Header";
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
  return (
    <>
      <Header />
      <Main>
        <div>
          <Title>Bem vindo!</Title>
          <Subtitle>Faça login para acessar o nexus</Subtitle>
        </div>

        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit" text="Entrar" redirect="/home" />
        </Form>

        <Button type="button" text="Crie sua conta" redirect="/signup" />

      </Main>
    </>
  )
}