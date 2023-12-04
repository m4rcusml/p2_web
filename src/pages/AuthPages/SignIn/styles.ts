import styled from 'styled-components';

export const Main = styled.main`
    background-color: #CBD5E1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    padding: 50px 0;

    height: calc(100vh - 80px);
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;

  width: 500px;
  min-width: 300px;
`;