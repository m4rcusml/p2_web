import { Container, Wrapper } from "./styles";

type Props = {
  text: string;
  redirect?: string | '';
  type?: 'submit' | 'button';
}

export function Button({text, redirect = '', type = 'button'}: Props) {
  return (
    <Wrapper type={type}>
      <Container to={redirect}>{text}</Container>
    </Wrapper>
  )
}