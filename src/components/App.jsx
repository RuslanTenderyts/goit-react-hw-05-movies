import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { Home } from "../page/Home";
// import { Movies } from '../page/Movies'
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import { MoviesDetals } from "page/MoviesDetals";

const Home = lazy(() => import("../page/Home"));
const Movies = lazy(() => import("../page/Movies"));
const MoviesDetals = lazy(() => import("../page/MoviesDetals"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetals />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    );
};