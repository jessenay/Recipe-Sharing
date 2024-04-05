import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {


  const { loading, data, error } = useQuery(QUERY_SINGLE_PROFILE);

  const userData = data?.profile || {};

  const [recipeVisibility, setRecipeVisibility] = useState({});

  const toggleRecipeVisibility = (recipeId) => {
    setRecipeVisibility((prevState) => ({
      ...prevState,
      [recipeId]: !prevState[recipeId],
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!userData.recipes) return <div>No recipes found.</div>;

  return (
    <div>
      <h1 className='profile-name'>{userData.username}'s Recipes</h1>
      <div>
        {userData.recipes.map((recipe) => (
          <div className="profile-recipes" key={recipe._id}>
            <h5
              className=""
              style={{
                fontSize: "38px",
                fontFamily: "Playfair Display",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              {recipe.title}
            </h5>
            <p
              className=""
              style={{
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: 300,
              }}
            >
              {recipe.description}
            </p>
            <button
              onClick={() => toggleRecipeVisibility(recipe._id)}
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
              className="btn"
            >
              {recipeVisibility[recipe._id] ? "Hide Details" : "View Details"}
            </button>
            {recipeVisibility[recipe._id] && (
              <div>
                <p>Prep Time: {recipe.prepTime}</p>
                <p>Cook Time: {recipe.cookTime}</p>
                <h6>Ingredients:</h6>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
