import React from "react";
import { useUserProfile } from "../UserProfileContext";

const UserProfileDisplay: React.FC = () => {
  const { profile } = useUserProfile();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default UserProfileDisplay;
