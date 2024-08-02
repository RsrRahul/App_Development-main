import { useState } from 'react';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Your profile has been updated.',
      date: '2024-08-01',
      time: '10:00 AM',
    },
    {
      id: 2,
      message: 'You have a new job offer.',
      date: '2024-08-02',
      time: '02:00 PM',
    },
    // Add more notifications as needed
  ]);

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return { notifications, removeNotification };
};
