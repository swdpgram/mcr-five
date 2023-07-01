import { Link } from "react-router-dom";
export function RecipeCard({
    image,
    name,
    cuisine,
    id,
    recipeList,
    setRecipeList
}) {

const deleteRecipe = (id) => { 
   const deletedList = recipeList.filter((item)=> item.id!==id)
   setRecipeList(deletedList)
}


  return (
    <>
      <div className="card-cont">
        <div className="card-img">
        <img src={image} alt="testimg" />
        
          <div className="card-badge">
            <i
              className="material-symbols-outlined"
              onClick={() =>deleteRecipe(id)}
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

      </div>
    </>
  );
}
