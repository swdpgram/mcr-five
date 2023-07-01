import { useParams } from "react-router-dom";
import { recipes } from "./data";
import { useEffect, useState } from "react";
import { RecipeSingle } from "./RecipeSingle";
export function RecipeDetail() { 

    const [ recipe, setRecipe] = useState({}); 
    const { id } = useParams(); 

    console.log({id})

    const getRecipe = () => { 
        return recipes.find((item)=> item.id===Number(id)) 
    }

    useEffect(()=> { 
        const recipeRetrieved = getRecipe();
        setRecipe({...recipeRetrieved}); 
    },[])

    return (
        <>
        <RecipeSingle {...recipe} />
        </>
    );
}