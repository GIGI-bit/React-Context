import React from "react";
import { useNotification } from "../NotificationContext";

type Props = {
  notification: {
    id: string;
    message: string;
    type: string;
  };
};

const NotificationItem: React.FC<Props> = ({ notification }) => {
  const { removeNotification } = useNotification();

  return (
    <div>
      <p>{notification.message}</p>
      <button onClick={() => removeNotification(notification.id)}>Close</button>
    </div>
  );
};

export default NotificationItem;
