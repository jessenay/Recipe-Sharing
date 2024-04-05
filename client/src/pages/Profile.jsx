import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data, error } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId },
  });

  const userData = data?.profile || {};

  const [recipeVisible, setRecipeVisible] = useState(false); // State to control visibility of recipe details

  const toggleRecipeVisibility = () => {
    setRecipeVisible(!recipeVisible);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!userData.recipes) return <div>No recipes found.</div>;

  return (
    <div>
      <h1 className='profile-name'>{userData.username}'s Recipes</h1>
      <div>
        {userData.recipes.map((recipe) => (
          <div className="card-body profile-recipes" key={recipe._id}>
            <h5
              className="card-title"
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
              className="card-description"
              style={{
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: 300,
              }}
            >
              {recipe.description}
            </p>
            <button
              onClick={toggleRecipeVisibility} // Toggle button click event
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
              className="btn"
            >
              {recipeVisible ? "Hide Details" : "View Details"}
            </button>
            {recipeVisible && (
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