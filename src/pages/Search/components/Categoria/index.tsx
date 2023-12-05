import { CategoriaName, Container, Img } from "./styles";

import Image from '../../../../assets/image.png';

export function Categoria() {
  return (
    <Container>
      <CategoriaName>Empatia</CategoriaName>
      <Img src={Image} />
    </Container>
  )
}