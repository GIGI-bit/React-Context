import React, { useState } from "react";
import { useNotification } from "../NotificationContext";

const AddNotificationForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const { addNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(message, type);
    setMessage("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Notification message"
      />
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Notification type"
      />
      <button type="submit">Add Notification</button>
    </form>
  );
};

export default AddNotificationForm;
