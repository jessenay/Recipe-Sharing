<<<<<<< HEAD
// Remove useParams import as it's no longer needed
import React from 'react';
=======
import React from 'react';
import { useParams } from 'react-router-dom';
>>>>>>> 92a87e938ba25faed7ae735502f8c19c0685a8b9
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
<<<<<<< HEAD
  // Retrieve the profile ID directly from localStorage
  const profileId = localStorage.getItem('profileId');

=======
  const { profileId } = useParams();
>>>>>>> 92a87e938ba25faed7ae735502f8c19c0685a8b9
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId },
  });

<<<<<<< HEAD
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
=======
  if (loading) {
    return <div>Loading...</div>;
  }

  const profile = data?.profile;

  return (
    <div className="container">
      {profile && (
        <>
          <div className="profile-header">
            <img src={profile.profilePic} alt="Profile Picture" />
            <h1>{profile.name}</h1>
            <p>{profile.profession}</p>
          </div>
          <div className="profile-details">
            <h2>About Me</h2>
            <p>{profile.about}</p>
          </div>
          <div className="profile-skills">
            <h2>Skills</h2>
            <ul>
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="profile-contact">
            <h2>Contact</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
          </div>
        </>
      )}
      {!profile && <div>No profile data found.</div>}
>>>>>>> 92a87e938ba25faed7ae735502f8c19c0685a8b9
    </div>
  );
};

export default Profile;
