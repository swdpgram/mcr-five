import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes } from "./data";

export function Home() {
  const [recipeList, setRecipeList] = useState(recipes);
  const [search, setSearch] = useState("");
  const [ checked, setChecked] = useState({
    name: false,
    ingredients: false,
    cuisine: false
  })

  const searchHandler = (e) => {
    const searchValue = e.target.value; 

    setSearch(e.target.value);
   
    if(checked.name===true) { 
        const searchRecipeList = [...recipes].filter((item)=> item.name.toLowerCase().includes(searchValue.toLowerCase()))
        setRecipeList(searchRecipeList)
    }

    
    
  };

  const radioHandler = (e) => {
    const radioName = e.target.id
    
    if(radioName==="recipe-name") {
        
        setChecked({...checked, name: true, ingredients: false, cuisine: false})
       
     }
    else if(radioName==="ingredients") { 
        setChecked({...checked, name: false, ingredients: true, cuisine: false})
    }
    else if (radioName==="cuisine") { 
        setChecked({...checked, name: false, ingredients: false, cuisine: true})
     }
  };

  return (
    <>
      <div className="header">
        <h1> Your recipes </h1>
        <div className="search-filter">
          <input
            type="text"
            className="search-text"
            placeholder="Search by name, ingredients, cuisine"
            value={search}
            onChange={searchHandler}
          />

          <span>
          
            <b> Filters: </b>
          </span>

          <label htmlFor="recipe-name">
            <input
              type="radio"
              name="filters"
              id="recipe-name"
              checked={checked.name}
              onChange={radioHandler}
            />
            Name
          </label>

          <label htmlFor="ingredients">
            <input
              type="radio"
              name="filters"
              id="ingredients"
              checked={checked.ingredients}
              onChange={radioHandler}
            />
            Ingredients
          </label>

          <label htmlFor="cuisine">
            <input
              type="radio"
              name="filters"
              id="cuisine"
              checked={checked.cuisine}
              onChange={radioHandler}
            />
            Cuisine
          </label>

        </div>
      </div>

      <div className="container">
        <h1> All Recipes: </h1>
        <div className="recipe-container">
          {recipeList?.map((item) => {
            const sendRecipe = { recipeList, setRecipeList, ...item };
            return (
              <div key={item.id}>
                <RecipeCard {...sendRecipe} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
