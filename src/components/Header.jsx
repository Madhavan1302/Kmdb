import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate=useNavigate();
  const handleSearch=(e)=>{
    e.preventDefault();
    let q=e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${q}`);

  }
  return (
    <nav
      className="navbar navbar-expand-md bg-primary fixed-top navbar-dark"
    >
      <div className="container">
        <NavLink to={"/"} className={"navbar-brand"}>Kmdb</NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/" 
                >Home
                <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to={"movies/top-rated"} 
                >Top Rated
                <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to={"movies/popular"}
                >Popular
                <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to={"movies/upcoming"}
                >Upcoming
                <span className="visually-hidden">(current)</span></NavLink>
            </li>
            
          </ul>
          <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              name="search"
            />
            
          </form>
        </div>
      </div>
    </nav>
    
  )
}
