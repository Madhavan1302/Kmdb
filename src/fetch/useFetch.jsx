import React, { useEffect, useState } from 'react'

const useFetch = (apiPath,query=" ") => {
    const [data,setData]=useState([]);
    const apikey="e4edc493f7e3b5ba74504986aa0a477c";
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${apikey}&region=IN&original_language=ta&language=en-US&with_origin_country=IN&sort_by=release_date.desc&include_adult=false`;
    useEffect(()=>{
        async function loadData(){
            
              
              fetch(url)
                .then(res => res.json())
                .then((res) => (setData(res.results)))
                .catch(err => console.error(err));
        }
        loadData();
    },[apiPath]);
  return {data};
}

export default useFetch