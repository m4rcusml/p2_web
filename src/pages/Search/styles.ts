import styled from 'styled-components';

export const Container = styled.main`
  background-color: #CBD5E1;

  height: calc(100% - 80px);
  padding-bottom: 100px;

  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 15px auto;

  width: fit-content;
  padding: 8px 10px;

  background-color: white;
  border-radius: 10px;

  span {
    color: #122FC4;
  }
`;

export const CategoriasContainer = styled.div`
  background-color: white;
  padding: 12px;

  border-radius: 8px;
  margin: 0 32px;
`;

export const CategoriasTitle = styled.h2`
  font-size: 24px;
  border-bottom: 1px solid #171717;
`;

export const Lista = styled.div`
  margin-top: 10px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 15px;
`;
