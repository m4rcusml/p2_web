import styled from 'styled-components';

export const Container = styled.main`
  background-color: #CBD5E1;

  height: calc(100% - 80px);
  padding-bottom: 100px;
  position: relative;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Carrossel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 300%;
  gap: 3%;
  padding: 50px 50% 0 50%;

  transition: all 200ms;
  animation: spin 15s infinite 2s;

  @keyframes spin {
    0% {
      transform: translate(0);
    }
    45% {
      transform: translate(-29%);
    }
    90% {
      transform: translate(-58%);
    }
    100% {
      transform: translate(0);
    }
  }
`;

export const CarrosselItem = styled.div`
  background-color: white;
  border-radius: 15px;

  max-width: 350px;
  min-width: 350px;
  height: 190px;

  transform: translateX(-50%);
`; 

export const Separator = styled.hr`
  margin: 50px 30px 15px 30px;
  height: 5px;

  background-color: black;

  border-radius: 5px;
`;