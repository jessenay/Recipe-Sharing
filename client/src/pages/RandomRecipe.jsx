import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCards";


const Home = () => {
  const navigate = useNavigate();
  const handleAddRecipeClick = () => {
    navigate("/add-recipe");
  };

  return (
    <main>
      <RecipeCard />
    </main>
  );
};

export default Home;
