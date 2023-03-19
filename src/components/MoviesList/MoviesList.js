import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.stayled";

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieName>{movie.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
