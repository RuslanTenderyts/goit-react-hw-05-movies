import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY_API = "70dafc4dedeb92246e41153ac2fb24f3";

export const fetchMoviesWithQuery = async ( searchQuery, page = 1 ) => {
  
  const response = await axios.get(`search/movie?api_key=${KEY_API}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`);
  if(!response.data.total_results) {
    return Promise.reject( new Error( `По запиту "${searchQuery}" фільмів не знайдено` ));
  };
  return response.data;
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/week?api_key=${KEY_API}`);
    if(!response.data.total_results) {
       return Promise.reject( new Error( `Помилка пошуку` ));
    };
    return response.data;
  };
  
export const fetchMoviesDetails = async ( id ) => {

  const response = await axios.get(`movie/${id}?api_key=${KEY_API}&language=en-US`);
  if(!response) {
    return Promise.reject( new Error( `По запиту "${id}" фільмa не знайдено` ));
  };
  console.log(response)
  return response;
};

export const fetchMoviesCredits = async ( id ) => {

  const response = await axios.get(`movie/${id}/credits?api_key=${KEY_API}&language=en-US`);
  if(!response) {
    return Promise.reject( new Error( `По запиту "${id}" фільмa не знайдено` ));
  };
  
  return response.data;
};

export const fetchMoviesReviews = async ( id ) => {

  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`);
  if(!response.data.total_pages) {
    return Promise.reject( new Error( `По запиту "${id}" фільмa не знайдено` ));
  };
  return response.data;
};