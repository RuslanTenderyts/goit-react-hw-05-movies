import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMoviesCredits } from "service/api";

export const Cast = () => {
    const [actors, setActors] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => { 
          
        async function getFetch (id) {
            try {
                const data = await fetchMoviesCredits(id);
                setActors( data.cast );           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch(id);
      }, [id]);
      console.log(actors);
   
    return (
        <div>
            <ul>
            {actors.map(({id, name, character, profile_path }) => (
                <li key={id}>
                    <img src={`http://image.tmdb.org/t/p/w185${profile_path}`} alt={name}/>
                    <h3> { name } </h3>
                    <p>Character: {character}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}