import { Container, Input, SearchIcon } from "./styles";

export function SearchBar() {
  return (
    <Container>
      <SearchIcon className="material-symbols-outlined">
        search
      </SearchIcon>
      <Input type="text" placeholder="Pesquisar" />
    </Container>
  )
}