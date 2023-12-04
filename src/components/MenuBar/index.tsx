import { Container } from './styles';
import { MenuButton } from "./MenuButton";

export function MenuBar() {
  return (
    <Container>
      <MenuButton icon="home" to="/" />
      <MenuButton icon="search" to="/home/search" />
      <MenuButton icon="school" to="/home/courses" />
      <MenuButton icon="language" to="/home/forum" />
      <MenuButton icon="person" to="/home/profile" />
    </Container>
  )
}