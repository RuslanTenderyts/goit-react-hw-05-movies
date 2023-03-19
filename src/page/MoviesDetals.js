import { MoviesItem } from "components/MoviesItem/MoviesItem"
import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { fetchMoviesDetails } from "service/api";

export const MoviesDetals = () => {
    const [movie, setMovie] = useState('');
    const { id } = useParams();
   
    useEffect(() => { 
          
        async function getFetch (id) {
            try {
                const data = await fetchMoviesDetails(id);
                setMovie( data.data );           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch(id);
      }, [id]);
      

    return (
        <div>
            {movie && <MoviesItem movie={movie} />}
            <Outlet />
        </div>
    )
}