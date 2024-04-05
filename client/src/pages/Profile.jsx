import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data, error } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId },
  });

  const userData = data?.profile || {};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!userData.recipes) return <div>No recipes found.</div>;

  return (
    <div>
      <h1 className='profile-name'>{userData.username}'s Recipes</h1>
      <div>
        {userData.recipes.map((recipe) => (
          <div className="card-body profile-recipes">
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
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 400,
          }}
          className="card-text"
        >
          {recipe.description}
        </p>
        <button
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
          href="#"
          className="btn"
        >
          View Recipe
        </button>
      </div>
          // <div key={recipe._id}>
          //   <h3>{recipe.title}</h3>
          //   <p>{recipe.description}</p>
          //   <p>{recipe.image}</p>
          //   <p>{recipe.prepTime}</p>
          //   <p>{recipe.cookTime}</p>
          //   <p>{recipe.ingredients}</p>
          //   <p>{recipe.instructions}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
