import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  color: white;

  :hover {
    cursor: pointer;
  }
`;

/**
 * tive uma ideia: fazer a verificacao do focused aqui msm
 */
