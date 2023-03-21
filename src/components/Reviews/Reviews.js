
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMoviesReviews } from "service/api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => { 
          
        async function getFetch (id) {
            try {
                const data = await fetchMoviesReviews(id);
                setReviews( data.results );           
            } catch (error) {
                console.log(error)
            } 
        };
        getFetch(id);
      }, [id]);
      console.log(reviews);
   
    return (
        <div>
            <ul>
            {reviews.map(({id, author, content }) => (
                <li key={id}>
                    <h3> Autor: { author } </h3>
                    <p>{content}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Reviews;