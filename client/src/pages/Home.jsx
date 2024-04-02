import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const navigate = useNavigate();
  const handleAddRecipeClick = () => {
    navigate("./add-recipe");
  };

  return (
    <main>
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "42px",
            fontFamily: "Playfair Display",
            fontWeight: 400,
          }}
        >
          Welcome to Our Recipe Community!
        </h1>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Discover, share, and create the best recipes from around the world.
        </p>
      </section>

      <button
        onClick={handleAddRecipeClick}
        style={{ margin: "20px auto", display: "block" }}
      >
        Add Recipe
      </button>
      <RecipeList />
    </main>
  );
};

export default Home;
