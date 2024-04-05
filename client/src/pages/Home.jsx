import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import RandomRecipeGenerator from "../components/RandomRecipeGenerator";
import { fetchAllRecipes } from "../utils/API"

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

  // create method to search for books and set state on form submit
  const handleRandomRecipe = async (event) => {
    event.preventDefault();

    try {
      const response = await searchRecipe();

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { randomRecipe } = await response.json();
      console.log({ randomRecipe });

      // const bookData = items.map((book) => ({
      //   bookId: book.id,
      //   authors: book.volumeInfo.authors || ['No author to display'],
      //   title: book.volumeInfo.title,
      //   description: book.volumeInfo.description,
      //   image: book.volumeInfo.imageLinks?.thumbnail || '',
      // }));

      // setGeneratedRecipe(recipeData);
    } catch (err) {
      console.error(err);
    }
  };

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
                  onClick={handleRandomRecipe}
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
