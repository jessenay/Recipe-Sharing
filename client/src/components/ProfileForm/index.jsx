import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId },
  });

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
    </div>
  );
};

export default Profile;
