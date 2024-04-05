import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import RecipeCard from "../components/RecipeCards/RecipeCard.jsx"
import RandomRecipeGenerator from "../components/RandomRecipeGenerator";
import { fetchAllRecipes } from "../utils/API"

const Home = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };

  useEffect(() => {
    const loadRecipes = async () => {
      const fetchedRecipes = await fetchAllRecipes();
      setRecipes(fetchedRecipes);
    };
    loadRecipes();
  }, []);

  return (
    <main>
      <section>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-pumpkin-soup_bealubas.jpg')",
            height: 400,
            backgroundPosition: "center",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1
                  style={{
                    fontSize: "62px",
                    fontFamily: "Playfair Display",
                    fontWeight: 400,
                    lineHeight: "62px",
                  }}
                >
                  Welcome to
                  <br />
                  Our Recipe Community!
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Discover, share, and create the best recipes from around the
                  world.
                </p>
                <button
                  className="btn"
                  onClick={handleAddRecipeClick}
                  style={{
                    fontSize: "22px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    margin: "20px auto",
                    display: "block",
                  }}
                >
                  Add Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RandomRecipeGenerator />
      <RecipeList />
      <section className="recipe-list-section">
        <h2>Recipe Gallery</h2>
        <div className="recipe-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found. Be the first to add a recipe!</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
