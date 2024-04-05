// const RecipeList = ({ recipes }) => {
//   if (!recipes.length) {
//     return <h3>No Recipies Yet</h3>;
//   }

//   return (
//     <div>
//       <div className="flex-row justify-space-between my-4">
//         {recipes &&
//           recipes.map((recipe) => (
//             <div className="card" style="width: 18rem;">
//               <div className="card-body">
//                 <h5 className="card-title">{recipe.title}</h5>
//                 <p className="card-text">{recipe.instruction}</p>
//                 <a href="#" className="card-link">
//                   View Recipe
//                 </a>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeList;

import RecipeItem from "..//RecipeItem";
import { FETCH_RECIPES_QUERY } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function RecipeList() {

  const { loading, data } = useQuery(FETCH_RECIPES_QUERY);


  const recipes = data?.recipes || [];
  return (
    <div className="container pt-4">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
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