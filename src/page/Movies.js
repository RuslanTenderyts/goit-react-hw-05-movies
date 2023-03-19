import { Search } from "components/Search/Search"
import { useState, useEffect } from "react"
import { fetchMoviesWithQuery } from "service/api" 
import { MoviesList } from "components/MoviesList/MoviesList"

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    useEffect(() => { 
        if(!query){
            return;
        }         
        async function getFetch (query) {
            try {
                const data = await fetchMoviesWithQuery(query);
                setMovies( data.results );  
                console.log( data.results)           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch(query);
      }, [query] );

    const handleSubmit = (value) => {
        setQuery(value)
    }
    return (
        <div>
            <Search onSubmit={handleSubmit} />
            {movies.length > 0 && <MoviesList movies={movies}/>}
        </div>
    )
}