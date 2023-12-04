import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  background-color: #171717;

  height: 80px;
  padding: 10px 26px;
`;

export const Logo = styled.img`
  background-color: #122FC4;
  padding: 5px;
`;

export const NotificationIcon = styled.span`
  color: white;
`;

export const Nexus = styled.h1`
  color: white;
  font-weight: normal;
  font-size: 24px;
`;