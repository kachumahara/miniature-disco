import React, { Fragment } from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import './style.css';


const Name = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <p id='name'>{user.name}</p>
    </Fragment>
  );
};

export default Name;