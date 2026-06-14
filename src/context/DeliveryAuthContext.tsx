"use client";
import React, { createContext, useContext } from "react";

type DeliveryAuthCtx = {
  isDeliveryAuthenticated: boolean;
  login?: (...args: any[]) => Promise<void>;
  logout?: () => void;
};

const DeliveryAuthContext = createContext<DeliveryAuthCtx>({ isDeliveryAuthenticated: false });

export const DeliveryAuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <DeliveryAuthContext.Provider value={{ isDeliveryAuthenticated: false }}>{children}</DeliveryAuthContext.Provider>
);

export const useDeliveryAuth = () => useContext(DeliveryAuthContext);

export default DeliveryAuthContext;
