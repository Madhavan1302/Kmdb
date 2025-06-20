import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
export const MovieDetails = ({title}) => {
  const [movie,setMovie]=useState([]);
  const params=useParams();
    const url=`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1`;
    useEffect(()=>{
        async function loadData(){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVkYzQ5M2Y3ZTNiNWJhNzQ1MDQ5ODZhYTBhNDc3YyIsIm5iZiI6MTc1MDMxNzQ5Ny4wNzIsInN1YiI6IjY4NTNiOWI5ZDk1NDcwZTk4NGQ4MTk2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9XC2IvCbnbQhxz98mQ1IC_CRPclVVEdeBC9amxcCvtM'
                }
              };
              
              fetch(url, options)
                .then(res => res.json())
                .then((res) => (setMovie(res)))
                .catch(err => console.error(err));
        }
        loadData();
    },[]);
  useEffect(()=>{
    document.title=`${movie.title}`;
  },[])
  const image=`https://image.tmdb.org/t/p/original${movie.poster_path}`;
  console.log(movie);
  const generateDate=(minutes)=>{
    let hour=Math.floor(minutes/60);
    let min=minutes%60;
    return `${hour}h ${min}m`;
  }
  return (
    <div className="container">
      <h4 className="mx-2 text-danger border-bottom">{movie.title}</h4>
      <div className="row row-cols-1">
      <div className="col-md-4 col-sm-12 ">
        <img src={image}alt="" className="img-fluid img-thumbnail"/>
      </div>
      <div className="col-md-8 col-sm-12">
        <h5 className="text-primary">{movie.title}</h5>
        <p>{movie.overview}</p>
        {movie.genres?<p className="d-flex gap-3">{movie.genres.map((genre)=>(<span className="badge bg-danger" key={genre.id}>{genre.name}</span>))}</p>:""}
        <p>
          <i className="bi bi-star-fill text-warning "></i>
          {movie.vote_average} Rating | {movie.vote_count} Reviews
        </p>
        <table className="w-50 table-bordered mt-2">
          <tbody>
          <tr>
            <th>Runtime</th>
            <td>{generateDate(movie.runtime)}</td>
          </tr>
          <tr >
            <th >Budget</th>
            <td >{movie.budget}</td>
          </tr>
          <tr >
            <th >Collection</th>
            <td >{movie.revenue}</td>
          </tr>
          <tr >
            <th >Release date</th>
            <td >{movie.release_date}</td>
          </tr>
          </tbody>
        </table>
        <a href={`https://www.imdb.com/title/${movie.imdb_id}/`}target="_blank" className="btn btn-warning mt-3">View in Imdb</a>
      </div>
    </div>
    </div>
  )
}
