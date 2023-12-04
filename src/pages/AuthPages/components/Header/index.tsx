import { Container } from './styles';
import LogoCompleta from '../../../../assets/logo-completa.svg';

export function Header() {
  return (
    <Container>
      <img src={LogoCompleta} alt="" />
    </Container>
  )
}