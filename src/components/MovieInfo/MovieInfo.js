import { Link, useLocation } from "react-router-dom";
import { Container, Img, ContaineItem, } from "./MovieInfo.stayled";
import PropTypes from 'prop-types';

export const MovieInfo = ({movie}) => {
    const {poster_path, title, release_date, vote_average, genres, overview } = movie;
    const genresMovie = genres.map(genre => genre.name).join(" ");
    const imgUrl = `http://image.tmdb.org/t/p/w500/${poster_path}`;
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    console.log(movie)
     
    return (
       <>
        <Container>
            <Link to={backLinkHref}> &#8592; Go Back </Link>
            <ContaineItem>      
                <div>
                    <Img src={imgUrl} alt={title}/>
                </div>
                <div>
                    <h2>Adition information {title} ({release_date.slice(0, 4)}) </h2>
                    <p>User Score:  {Math.round(vote_average* 10)}% </p>
                    <h3>Overview</h3>
                    <p>{overview} </p>
                    <h3>Genres</h3>
                    <p>{genresMovie}</p>
                </div>
            </ContaineItem>  
        </Container>
        <Container>
            <ul>
                <li> <Link to="cast">Cast</Link> </li>
                <li> <Link to="reviews">Reviews</Link> </li>
            </ul>
        </Container>
      </>  
    )
};

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired
}