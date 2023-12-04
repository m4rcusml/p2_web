import { Section } from "./components/Section";
import { Carrossel, CarrosselItem, Container, Separator } from "./styles";

export function Home() {
  return (
    <Container>
      <Carrossel>
        <CarrosselItem />
        <CarrosselItem />
        <CarrosselItem />
      </Carrossel>

      <Separator />

      <Section title="Continuar assistindo" />

      <Separator />

      <Section title="Novidades" />

    </Container>
  )
}