import RecipeItem from "..//RecipeItem";
import { FETCH_RECIPES_QUERY } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import './RecipeList.css';
import React, { useMemo } from "react";


export default function RecipeList() {
  const { loading, data } = useQuery(FETCH_RECIPES_QUERY);

  // Using useMemo to sort the recipes based on _id in descending order.
  const recipes = useMemo(() => {
    const unsortedRecipes = data?.recipes || [];
    // Ensure you're sorting by `_id` if that's the correct property name
    const sortedRecipes = [...unsortedRecipes].sort((a, b) => {
      if (b._id && a._id) { // Additional check to ensure _id exists on both objects
        return b._id.localeCompare(a._id);
      }
      return 0; // Return a default value if one of the IDs is missing
    });
    return sortedRecipes;
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container pt-4">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
        />
      ))}
    </div>
  );
};