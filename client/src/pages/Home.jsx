import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <section className="recipe-list-section">
        <h2>Featured Recipes</h2>
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
