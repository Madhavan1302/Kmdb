import { Link } from "react-router-dom"
export const Card = ({id,title,imgPath,desc,voteAvg,voteCount}) => {
  const image=`https://image.tmdb.org/t/p/original${imgPath}`;
  return (
    <div className="col  " id={id}>
      <div className="card" title={title}>
        <img className="card-img-top" src={image} alt="Title" />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1"> {title}</h5>
          <p className="card-text text-overflow-2">{desc}</p>
          <div className="review d-flex gap-2 justify-content-between align-items-center">
            <Link to={`/movies/details/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>
            <div className="review-count">
              <i className="bi bi-star-fill text-warning"></i>
              {voteAvg} | {voteCount} reviews
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
