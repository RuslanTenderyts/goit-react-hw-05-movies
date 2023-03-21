import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "service/api";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {       
        async function getFetch () {
            try {
                const data = await fetchTrendingMovies();
                setMovies( data.results );  
                console.log( data.results)           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch ();
      }, [] );
    
    return (
        <>
            <h2>Trending today</h2>
            <MoviesList movies={movies} />
        </>
        
    )
}
export default Home;