// Remove useParams import as it's no longer needed
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  // Retrieve the profile ID directly from localStorage
  const profileId = localStorage.getItem('profileId');

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId },
  });

  if (loading) return <div>Loading...</div>;
  if (!data || !data.profile) return <div>No profile found.</div>;

  const { profile } = data;

  return (
    <div>
      <h1>{profile.username}'s Recipes</h1>
      <div>
        {profile.recipes.map((recipe) => (
          <div key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Display ingredients and instructions */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
