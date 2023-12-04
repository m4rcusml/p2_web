import { Container, Logo, Nexus, NotificationIcon } from './styles'
import LogoSVG from '../../assets/logo.svg';
import { SearchBar } from './SearchBar';

export function Header({middle = 'nexus'}: {middle?: 'search' | 'nexus'}) {
  return (
    <Container>
      <Logo src={LogoSVG} />
      {
        middle === 'search' ? <SearchBar /> : <Nexus>Nexus</Nexus>
      }
      <NotificationIcon className="material-symbols-outlined">
        notifications
      </NotificationIcon>
    </Container>
  )
}