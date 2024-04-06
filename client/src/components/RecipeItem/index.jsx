import { useState } from "react";

export default function RecipeItem(props) {

  const [recipeVisibility, setRecipeVisibility] = useState({});

  const toggleRecipeVisibility = (recipeId) => {
    setRecipeVisibility((prevState) => ({
      ...prevState,
      [recipeId]: !prevState[recipeId],
    }));
  };
  return (
    <div className="profile-recipes">
      <div className="">
      
        <h5
          className=""
          style={{
            fontSize: "38px",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {props.title}
        </h5>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 400,
          }}
          className=""
        >
          {props.description}
        </p>
        <button
              onClick={() => toggleRecipeVisibility(props._id)}
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
              className="btn"
            >
              {recipeVisibility[props._id] ? "Hide Details" : "View Details"}
            </button>
            {recipeVisibility[props._id] && (
              <div>
                <p>Prep Time: {props.prepTime}</p>
                <p>Cook Time: {props.cookTime}</p>
                <h6>Ingredients:</h6>
                <ul>
                  {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  {props.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            )}
      </div>
    </div>
  );
}
