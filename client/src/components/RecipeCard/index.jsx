import "../RecipeCards/RecipeCard.css";

//Displays Recipe card
const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2 className="word">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />

      { recipe.prepTime && <p className="time">Prep Time: {recipe.prepTime}</p>}
      { recipe.cookTime && <p className="time">Cook Time: {recipe.cookTime}</p>}
      <h3 className="word">Ingredients</h3>
      <ul className="list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="word">Instructions</h3>
      <ul className="list">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;