import React, { createContext, useContext, useState, ReactNode } from "react";

type UserProfile = {
  name: string;
  email: string;
  age: number;
};

type UserProfileContextType = {
  profile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    age: 0,
  });

  const updateUserProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  return (
    <UserProfileContext.Provider value={{ profile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};

export { UserProfileProvider, useUserProfile };
