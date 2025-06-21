import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../fetch/useFetch'
import { Card } from './Card'
export const CardList = ({apiPath,id,name}) => {
    const scrollLeft=()=>{
        document.querySelector("#"+id).scrollBy({left:-300,behaviour:"smooth"})
    }
    const scrollRight=()=>{
        document.querySelector("#"+id).scrollBy({left:300,behaviour:"smooth"})
    }
    const {data}=useFetch(apiPath);
  return (
    <div className='container-fluid '>
        <div className='fcolor d-flex justify-content-between'>
            <h5>{name}</h5>
            <Link to={apiPath} style={{textDecoration:"none"}}>view more</Link>
        </div>
        <div className='container-fluid py-2 position-relative' style={{overflow:"auto"}}>
        <button  className='scroll-btn start-0 d-none d-md-block' onClick={scrollLeft}>
                <span class="carousel-control-prev-icon fcolor" aria-hidden="true"></span>
            </button>
            <div className='movie-list d-flex flex-row flex-nowrap gap-1' id={id}>
            {data.map((data)=>(<Card key={data.id} id={data.id} title={data.title} imgPath={data.backdrop_path} desc={data.overview} voteAvg={data.vote_average} voteCount={data.vote_count} list={true} thumb={data.poster_path}/>))}
           
            </div>
            <button  className='scroll-btn end-0 d-none d-md-block' onClick={scrollRight}>
                <span class="carousel-control-next-icon fcolor" aria-hidden="true" style={{color:"white"}}></span>
            </button>
        </div>
       
        
    </div>
  )
}
