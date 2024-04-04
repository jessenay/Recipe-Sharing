import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';


const Profile = () => {
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE);

  const userData = data?.profile || {};
  console.log(userData);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  // if (!data || !data.profile) return <div>No profile found.</div>; // Add this line to handle undefined data

  // const { profile } = data;

  return (
    <div>
      <h1>{userData.username}'s Recipes</h1>
      <div>
        {userData.recipes.map((recipe) => (
          <div key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            Display ingredients and instructions
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
