import { Search } from "components/Search/Search";
import { useSearchParams } from "react-router-dom" ;
import { useState, useEffect } from "react";
import { fetchMoviesWithQuery } from "service/api";
import { MoviesList } from "components/MoviesList/MoviesList";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";
    
    useEffect(() => { 
        if(!movieName){
            return;
        }         
        async function getFetch (movieName) {
            try {
                const data = await fetchMoviesWithQuery(movieName);
                setMovies( data.results );  
                console.log( data.results)           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch(movieName);
      }, [ movieName ] );

    const handleSubmit = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    }

    return (
        <div>
            <Search onSubmit={handleSubmit} />
            {movies.length > 0 && <MoviesList movies={movies}/>}
        </div>
    )
}