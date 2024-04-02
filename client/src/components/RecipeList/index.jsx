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

const recipes = [
  {
    id: 1,
    title: "Fists of Forecast",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
  {
    id: 2,
    title: "The Green Hill",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
  {
    id: 3,
    title: "Code Quiz",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
  {
    id: 4,
    title: "Work Day Scheduler",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
  {
    id: 5,
    title: "Password Generator",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    instruction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
  },
];

export default function RecipeList() {
  return (
    <div className="container pt-4">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.instruction}
        />
      ))}
    </div>
  );
};