import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeList from "./components/RecipeList";

const Home = () => {
  const navigate = useNavigate();
  const handleAddRecipeClick = () => {
    navigate('./add-recipe');
  };

  return (
    <main>
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to Our Recipe Community!</h1>
        <p>
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
      <section style={{ padding: "20px" }}>
        <h2>Featured Recipes</h2>
        {/*fetched recipes data and render recipe cards/components*/}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* Placeholder for recipe highlights */}
          <div>A featured recipe</div>
          <div>A featured recipe</div>
          <div>A featured recipe</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
