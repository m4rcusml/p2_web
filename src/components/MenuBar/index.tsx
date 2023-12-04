import { Container } from './styles';
import { MenuButton } from "./MenuButton";

export function MenuBar() {
  return (
    <Container>
      <MenuButton icon="home" to="/" />
      <MenuButton icon="search" to="/search" />
      <MenuButton icon="school" to="/courses" />
      <MenuButton icon="language" to="/forum" />
      <MenuButton icon="person" to="/profile" />
    </Container>
  )
}