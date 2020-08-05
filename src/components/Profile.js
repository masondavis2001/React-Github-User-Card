
import React from "react";

const Profile = props => {
  return (
    <div className="profileCard">
      <img width="250px" src={props.user.avatar_url} alt="Mason" />
      <div className="nameDiv">
        <h2>{props.user.name}</h2>
        <h4>GitHub Handle: {props.user.login}</h4>
        <h4>Followers: {props.user.followers}</h4>
        <h5>Bio: {props.user.bio}</h5>
      </div>
    </div>
  );
};

export default Profile;
