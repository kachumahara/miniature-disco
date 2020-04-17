import React, { Fragment } from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import './style.css';


const UserInfo = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div>
      <img src={user.picture} alt="user info" />
</div>
    </Fragment>
  );
};

export default UserInfo;