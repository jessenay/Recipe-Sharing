import { useState } from "react";
import "./RecipeItem.css";
import { useMutation } from "@apollo/client";

export default function RecipeItem(props) {
  const [recipeVisibility, setRecipeVisibility] = useState(false);
  const toggleRecipeVisibility = () => {
    setRecipeVisibility(!recipeVisibility);
  };

  return (
    <div className="single-recipe-card">
      <div> Author: {props.author} </div>
      <div className="single-card-header">{props.title}</div>
      <div className="single-card-body">
        <p className="content">{props.description}</p>
        <button className="btn-view-details" onClick={toggleRecipeVisibility}>
          {recipeVisibility ? "Hide Details" : "View Details"}
        </button>
        {recipeVisibility && (
          <div>
            <div className="detail-section">
              <p className="detail">Prep Time: {props.prepTime}</p>
              <p className="detail">Cook Time: {props.cookTime}</p>
            </div>
            <div className="detail-section">
              <h6 className="subtitle">Ingredients:</h6>
              <ul className="list-unstyled">
                {props.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="detail-section">
              <h6 className="subtitle">Instructions:</h6>
              <ol className="list-unstyled">
                {props.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
      <Button
        className="btn-danger btn-view-details"
        onClick={() => removeRecipe()}
        disabled={loading}
        style={{
          marginLeft: "10px",
          margin: "20px auto",
          display: "block",
          fontFamily: "Roboto",
        }}
      >
        Delete
      </Button>
    </div>
  );
}
