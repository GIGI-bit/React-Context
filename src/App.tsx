import React from "react";
import { NotificationProvider } from "./NotificationContext";
import NotificationList from "./components/NotificationList";
import AddNotificationForm from "./components/AddNotificationForm";
import { UserProfileProvider } from "./UserProfileContext";
import UserProfileDisplay from "./components/UserProfileDisplay";
import EditUserProfileForm from "./components/EditUserProfileForm";

const App: React.FC = () => {
  return (
    // <NotificationProvider>
    //   <div>
    //     <h1>Notification App</h1>
    //     <AddNotificationForm />
    //     <NotificationList />
    //   </div>
    // </NotificationProvider>
    <UserProfileProvider>
      <div>
        <h1>User Profile Management</h1>
        <UserProfileDisplay />
        <EditUserProfileForm />
      </div>
    </UserProfileProvider>
  );
};

export default App;
