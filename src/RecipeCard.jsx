import { Link } from "react-router-dom";
export function RecipeCard({
    image,
    name,
    cuisine,
    id,
}) {
  return (
    <>
      <div className="card-cont">
        <div className="card-img">
        <img src={image} alt="testimg" />
        
          <div className="card-badge">
            <i
              className="material-symbols-outlined"
              onClick={() => console.log("here")}
            >
              delete
            </i>
            {/* <i
              className="material-symbols-outlined"
              id="red-fill"
              onClick={() => console.log("here")}
            >
              delete
            </i> */}
          </div>

          
        </div>

        <div className="card-details">
          <div>
            
            <h3>{name} </h3> 
          </div>
          <b> Cuisine Type: {cuisine}  </b>
             <span> <b> Ingredients:</b> <Link to={"/recipe/"+id} className="links"> See Recipe {">"} </Link> </span> 
            <span> <b> Instructions:</b> <Link to={"/recipe/"+id} className="links"> See Recipe {">"} </Link> </span>
        </div>
{/* 
        <button
          className="card-button active-button"
          onClick={() => console.log("here")}
        >
          {" "}
          Add to Cart
        </button>
        <button
          className="card-button active-button"
          onClick={() => console.log("here")}
        >
          {" "}
          Go to Cart
        </button> */}
      </div>
    </>
  );
}
