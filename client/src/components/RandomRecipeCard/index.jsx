import "../RecipeCards/RecipeCard.css";

//Displays Recipe card
export default function RecipeCard(data) {
  return (
    <div className="recipe-card">
      <h2 className="word"></h2>
      <img src="" alt="" />
      {/* <p className="time">Prep Time: {data.meals[0].strMeal}</p>
        <p className="time">Cook Time: {data.meals[0].strMeal}</p> */}
      <h3 className="word">Ingredients</h3>
      {/* <ul className="list">
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="word">Instructions</h3>
        <ul className="list">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul> */}
    </div>
  );
}
