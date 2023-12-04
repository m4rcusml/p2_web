import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Icon } from './styles';

type Props = {
  icon: 'home' | 'search' | 'school' | 'language' | 'person';
  to: '/' | '/home/search' | '/home/courses' | '/home/forum' | '/home/profile';
}

export function MenuButton({icon, to}: Props) {
  const [ focused, setFocused ] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(location.pathname)

    if (pathname === to) {
      setFocused(true)
    } else {
      setFocused(false)
    }
  }, [location]);
  
  return (
    <Container to={to}>
      <Icon 
        className="material-symbols-outlined" 
      >
        {icon}
      </Icon>
    </Container>
  )
}