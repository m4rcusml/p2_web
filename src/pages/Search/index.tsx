import { Categoria } from "./components/Categoria";
import { CategoriasContainer, CategoriasTitle, Container, Lista, Title } from "./styles";

export function Search() {
  return (
    <Container>
      <Title><span>Seus</span> cursos</Title>
      
      <CategoriasContainer>
        <CategoriasTitle>Categorias</CategoriasTitle>
        <Lista>
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
          <Categoria />
        </Lista>
      </CategoriasContainer>
    </Container>
  )
}