import { useParams } from 'react-router-dom';
// Important for useQuery: We import the useQuery hook from @apollo/client
import { useQuery } from '@apollo/client';

// Important for useQuery: We import the specific query we'd like to perform from our queries.js utility
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  // Important for useQuery: We pass the query we'd like to execute on component load to the useQuery hook
  // In this case, the query we want to run also requires query parameters to be passed, which we deliver as a variables object
  // The useQuery hook will always give back an object, and for the purposes of this app we're using the loading boolean and the data object
  // The data object will match the same result you'd get if you ran this query within the GraphQL playground
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // Important for Query Variables: The useQuery hook is able to take a second argument which is where we will pass the query arguments needed to complete the request for a specific profile
    // The second argument is passed as an object with a variables property
    // The variables object will receive each key matching the query definition in utils/queries.js, and the value we'd like to deliver to the server
    variables: { profileId: profileId },
  });

  // Important for useQuery: We use the optional chaining operator to get the resulting profile from our query, or fallback to an empty object if the query isn't resolved yet
  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
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
