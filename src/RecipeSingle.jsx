import { Link } from "react-router-dom";

export function RecipeSingle({
  image,
  name,
  cuisine,
  id,
  ingredients,
  instructions,
}) {
  // console.log({name})

  return (
    <>
      <Link to="/"> Back to Home </Link>

      <h1>  {name}  </h1>

      <div className="recipe-card">
        <img src={image} style={{width: "200px", height: "100px" }}/>

        <div className="recipe-details">
          <p>
            {" "}
            <b> Cuisine: </b> {cuisine}{" "}
          </p>
          
          <p>
            <b> Ingredients: </b>
            {ingredients?.map((item) => {
              return item;
            })}
          </p>

          <p> 
           <b> Instructions: </b>
           <ol>
           { 
            instructions?.map((item)=> { 
                return(
                    <li> {item} </li>
                );
            })
           }
           </ol>
          </p>  
        </div>
      </div>
    </>
  );
}
