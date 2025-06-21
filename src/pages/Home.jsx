import React from 'react'
import useFetch from '../fetch/useFetch'
import { CardList } from '../components';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const {data}=useFetch("movie/now_playing");
    const now_play=data.filter((item)=>(item.original_language=="ta"))
    const navigate=useNavigate();
    console.log(now_play);
  return (
    <div>
        <section className='nowplaying'>
            <h4 className='fcolor container-md'>Now Playing</h4>
            <div id="carouselId" className=" carousel slide mh-75" data-bs-ride="carousel">
                <ol className="carousel-indicators list">
                    {now_play.map((movie)=><li key={movie.id}
                        data-bs-target="#carouselId"
                        data-bs-slide-to={""+now_play.indexOf(movie)}
                        className={now_play.indexOf(movie)==0?"active":""}
                    ></li>)}
                </ol>
                <div className="carousel-inner" role="listbox" >
                   {now_play.map((movie)=>( <div key={movie.id} className={now_play.indexOf(movie)==0?"carousel-item active":"carousel-item"} onClick={()=>{navigate(`/movie/details/${movie.id}`)}}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            className="w-100 d-block"
                           
                        />
                        <div className="carousel-caption d-md-block black">
                            <h3>{movie.title}</h3>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
        <section className='popular mt-3'>
            <CardList apiPath="movie/popular" id="popular" name="Popular"/>
        </section>
        <section className='top_rated mt-3'>
            <CardList apiPath="movie/top_rated" id="top_rated"name="Top rated"/>
        </section>
        <section className='upcoming mt-3'>
            <CardList apiPath="movie/upcoming" id="upcoming" name="Upcoming movies"/>
        </section>
    </div>
  )
}
