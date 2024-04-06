import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { search } from "../utils/API";

const RandomRecipe = () => {
  // create state for holding returned google api data
  const [randomRecipe, setRandomRecipe] = useState();

  useEffect(() => {
    search()
      .then((res) => {
        console.log(res.data.meals[0]);
        const {
          strMeal: title,
          strMealThumb: image,
          strInstructions: instructions,
          ...meal
        } = res.data.meals[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const measure = meal["strMeasure" + i];
          const ingredient = meal["strIngredient" + i];
          if (!measure || !ingredient) {
            break;
          }
          ingredients.push(measure + " " + ingredient);
        }
        setRandomRecipe({
          title,
          image,
          ingredients,
          instructions: instructions.split("\r\n").filter(Boolean),
        });
      })
      .catch((err) => console.log(err));
  }, []);

  if (randomRecipe) {
    console.log(randomRecipe);
    return <RecipeCard recipe={randomRecipe} />;
  } else {
    return <div>Loading ...</div>;
  }
};

export default RandomRecipe;
