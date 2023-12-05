import { Category, Container, Img, ImgContainer, Name, Progress, ProgressCount } from "./styles";

import Image from '../../../../../assets/image.png';

export function Course() {
  return (
    <Container>
      <ImgContainer>
        <Category>Empatia</Category>
        <Img src={Image} />
      </ImgContainer>
      <Name>Comunicação</Name>
      <Progress>
        <progress value={7} max={28} />
        <ProgressCount>7 / 28</ProgressCount>
      </Progress>
    </Container>
  )
}