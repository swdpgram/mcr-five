import { RecipeCard } from "./RecipeCard";
import { recipes } from "./data";

export function Home() {
  return (
    <>
     <div className="header"> 
     <h1> Your recipes </h1>
      <div className="search-filter">
        <input
          type="text"
          className="search-text"
          placeholder="Search by name, ingredients, cuisine"
        />

        <span>
          {" "}
          <b> Filters </b>{" "}
        </span>
        <label htmlFor="recipe-name">
          <input type="radio" name="filters" id="recipe-name" defaultChecked />
          Name
        </label>
        <label htmlFor="ingredients">
          <input type="radio" name="filters" id="ingredients" />
          Ingredients
        </label>
        <label htmlFor="cuisine">
          <input type="radio" name="filters" id="cuisine" />
          Cuisine
        </label>
      </div>
     </div>

     <div className="container">
        <h1> All Recipes: </h1>
        <div className="recipe-container">
        { 
        recipes.map((item,index)=> { 
            return(
                <div key={item.id}>
                <RecipeCard {...item} />
                </div>
            );
        })
        }
         </div>


     </div>
      
    </>
  );
}
