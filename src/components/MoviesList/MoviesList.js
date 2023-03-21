import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.stayled";
import PropTypes from 'prop-types';



export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id} `} state={{ from: location }}>
            <MovieName>{movie.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}