import { Link, useNavigate } from "react-router-dom"
export const Card = ({id,title,imgPath,desc,voteAvg,voteCount,list,thumb}) => {
  const image=`https://image.tmdb.org/t/p/original${!list?thumb:imgPath}`;
  const navigate=useNavigate();
  return (
    <div className={list?"movie-card border border-light-subtle":"col"} id={id} onClick={()=>{navigate(`/movie/details/${id}`)}}>
      <div className="card theme" title={title}>
        <img className={!list?"img-thumbnail":"card-img-top"}src={image} alt="Title" />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1"> {title}</h5>
          {!list&&<p className="card-text text-overflow-2">{desc}</p>}
          <div className="review d-flex gap-2 justify-content-between align-items-center">
           {!list&& <Link to={`/movies/details/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>}
            <div className="review-count">
              <i className="bi bi-star-fill text-warning"></i>
              {voteAvg.toFixed(2)} | {voteCount} reviews
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
