import RecipeItem from "..//RecipeItem";
import { FETCH_RECIPES_QUERY } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import './RecipeList.css';

export default function RecipeList() {

  const { loading, data } = useQuery(FETCH_RECIPES_QUERY);
  console.log(data);

  if (loading) return <p>Loading recipes...</p>;


  const recipes = data?.recipes || [];
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