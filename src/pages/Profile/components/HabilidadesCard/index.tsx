import { Habilidade } from "./Habilidade";
import { Container, Title, Lista } from "./styles";

export function HabilidadesCard() {
  return (
    <Container>
      <Title>Suas habilidades</Title>
      <Lista>
        <Habilidade />
        <Habilidade />
        <Habilidade />
        <Habilidade />
        <Habilidade />
        <Habilidade />
      </Lista>
    </Container>
  )
}