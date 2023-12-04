import { Container, TextInput } from "./styles";

type Props = {
  placeholder: string;
  type: 'text' | 'email' |'password';
}

export function Input({placeholder, type}: Props) {
  return (
    <Container>
      <TextInput placeholder={placeholder} type={type} />
    </Container> 
  )
}