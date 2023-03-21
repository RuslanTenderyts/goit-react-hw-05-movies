import { MovieInfo } from "components/MovieInfo/MovieInfo"
import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { fetchMoviesDetails } from "service/api";
import { Suspense } from "react";

const MoviesDetals = () => {
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
            {movie && <MovieInfo movie={movie} />}
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}
export default MoviesDetals;