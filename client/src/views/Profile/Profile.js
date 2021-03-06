import React, { Fragment } from "react";
import { useAuth0 } from "../../utils/auth0Provider";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div>
      <img src={user.picture} alt="Profile" />
      <h1>Hello {user.name}</h1>
      </div>



      {/* <h2>{user.name}</h2> */}
      {/* <p>{user.email}</p> */}
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;