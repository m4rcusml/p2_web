import styled from 'styled-components';

export const Container = styled.div`
  width: 175px;
  height: 170px;
  padding: 10px;

  border-radius: 10px;

  background-color: white;

  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  border-radius: 8px;
  overflow: hidden;

  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Category = styled.p`
  background-color: #6305FD;
  color: white;

  font-size: 12px;

  border-radius: 0 0 10px 0;
  padding: 5px;
  
  position: absolute;
  top: 0;
  left: 0;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProgressBar = styled.progress`
  /* não lembro como que muda a aparencia disso */
`;

export const ProgressCount = styled.p`
  flex: 0 0;
`;