import { Routes,Route } from "react-router-dom"
import {Home, MovieDetails, MoviesList, Search} from "../pages"

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route index path="/" element={<MoviesList title="Your choice for Great Movie Recommendation" apiPath="movie/now_playing"/>}></Route> */}
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/movie/top_rated" element={<MoviesList title="Top Rated" apiPath="movie/top_rated"/>} ></Route>
        <Route path="/movie/popular" element={<MoviesList title="Popular" apiPath="movie/popular"/>}></Route>
        <Route path="/movie/upcoming" element={<MoviesList title="Upcoming" apiPath="movie/upcoming"/>}></Route>
        <Route path="/movie/details/:id" element={<MovieDetails />}></Route>
        <Route path="/search" element={<Search/>}></Route>
    </Routes>
  )
}

export default AllRoutes