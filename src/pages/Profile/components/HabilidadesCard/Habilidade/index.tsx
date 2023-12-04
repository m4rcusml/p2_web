import { Container, Name } from "./styles";

export function Habilidade() {
  return (
    <Container>
      <Name>Persuação</Name>
      <progress value={70} max={100} />
    </Container>
  )
}