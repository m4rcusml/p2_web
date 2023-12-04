import { Course } from "./Course";
import { Container, Courses, Title } from "./styles";

type Props = {
  title: string;
}

export function Section({title}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Courses>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </Courses>
    </Container>
  )
}