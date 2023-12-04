import { Container } from './styles';
import { HabilidadesCard } from './components/HabilidadesCard';
import { ProfileCard } from './components/ProfileCard';

export function Profile() {
  return (
    <Container>
      <ProfileCard />
      <HabilidadesCard />
    </Container>
  )
}