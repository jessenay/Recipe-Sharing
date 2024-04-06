import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import { fetchAllRecipes } from "../utils/API";

const Home = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipeClick = () => {
    navigate("/add-recipe");
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

      <div className=" pt-4">
        <div
          className="card-body"
          style={{
            paddingTop: "2%",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Recipe Generator
          </h3>
          <h2
            className="card-title"
            style={{
              fontSize: "45px",
              fontFamily: "Playfair Display",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Don't know what to cook?
          </h2>
          <Link className="text-light p-2" to="/random-recipe">
            <button
              style={{
                fontSize: "22px",
                fontFamily: "Poppins",
                fontWeight: 500,
                textTransform: "uppercase",
                margin: "20px auto",
                display: "block",
                backgroundColor: "rgb(170, 209, 95)",
                color: "rgb(6, 5, 46)",
              }}
              href="#"
              className="btn"
            >
              Generate a Recipe
            </button>
          </Link>
        </div>
      </div>
      <RecipeList />
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
