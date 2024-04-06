import React, { useMemo } from 'react';
import RecipeItem from "../RecipeItem";
import { FETCH_RECIPES_QUERY } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function RecipeList() {
  const { loading, data } = useQuery(FETCH_RECIPES_QUERY);

  const recipes = useMemo(() => {
    const unsortedRecipes = data?.recipes || [];
    const sortedRecipes = [...unsortedRecipes].sort((a, b) => {
      if (b._id && a._id) {
        return b._id.localeCompare(a._id);
      }
      return 0;
    });
    return sortedRecipes;
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container pt-4">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe._id}
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
}
