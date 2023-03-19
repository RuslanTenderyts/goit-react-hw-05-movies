import { Link } from "react-router-dom";
import { Container, Img, ContaineItem, } from "./MoviesItem.stayled";


export const MoviesItem = ({movie}) => {
    const {poster_path, title, release_date, vote_average, genres, overview } = movie;
    const genresMovie = genres.map(genre => genre.name).join(" ");
    const imgUrl = `http://image.tmdb.org/t/p/w500/${poster_path}`
    
    
    console.log(genresMovie)
    return (
       <>
        <Container>
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

