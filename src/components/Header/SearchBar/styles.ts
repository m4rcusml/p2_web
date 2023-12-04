import styled from 'styled-components';

export const Container = styled.div`
  background-color: #262626;

  padding: 5px;
  border-radius: 10px;

  flex: 0 1 300px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const SearchIcon = styled.span`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

export const Input = styled.input`
  background-color: transparent;
  color: white;

  font-size: 14px;
  flex: 1 1;
  
  border: none;
  outline: none;
`;