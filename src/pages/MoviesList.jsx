import {Card} from "../components"
import useFetch from "../fetch/useFetch"
import { useEffect } from "react"
export const MoviesList = ({title,apiPath}) => {
  useEffect(()=>{
    document.title=title;
  },[title])
  const {data}=useFetch(apiPath);
  console.log(data);
  
  return (
    <div className="container">
      <h5 className="border-bottom text-danger p-2">{title}</h5>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2"> 
        {data.map((data)=>(<Card key={data.id} id={data.id} title={data.title} imgPath={data.backdrop_path} desc={data.overview} voteAvg={data.vote_average} voteCount={data.vote_count}/>))}
      </div>
    </div>
  )
}
