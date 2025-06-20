import { useEffect, useState } from "react"
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [data,setData]=useState([]);
  const [searchPara]=useSearchParams();
  const apikey="e4edc493f7e3b5ba74504986aa0a477c";
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchPara.get("q")}&region=IN&original_language=ta&language=en-US&with_origin_country=IN&sort_by=release_date.desc&include_adult=false`;
  useEffect(()=>{
    async function load(){
     fetch(url).then((res)=>(res.json())).then((res)=>( setData(res.results)));
    }
    
    load();
    document.title="Search results for "+searchPara.get("q");
  },[searchPara.get("q")])
  return (
    <div className="container">
     <h5 className="border-bottom text-danger p-2">Results for :{searchPara.get("q")}</h5>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2"> 
      {data.map((data)=>(<Card key={data.id} id={data.id} title={data.title} imgPath={data.backdrop_path} desc={data.overview} voteAvg={data.vote_average} voteCount={data.vote_count}/>))}
    </div>
  </div>
  )
}
