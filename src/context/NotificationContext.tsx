"use client";
import React, { createContext, useContext } from "react";

type NotificationsCtx = {
  notifications: any[];
  addNotification?: (n: any) => void;
  removeNotification?: (id: any) => void;
  refreshUnreadCount: () => void;
};

const NotificationContext = createContext<NotificationsCtx>({ 
  notifications: [],
  refreshUnreadCount: () => {}
});

export const NotificationProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const refreshUnreadCount = () => {
    // Placeholder for actual implementation if needed later
    console.log("Refreshing unread count...");
  };

  return (
    <NotificationContext.Provider value={{ notifications: [], refreshUnreadCount }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);

export default NotificationContext;
