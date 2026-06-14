"use client";
import React, { createContext, useContext } from "react";

type Auth = {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login?: (...args: any[]) => Promise<void>;
  logout?: () => void;
};

const AuthContext = createContext<Auth>({ user: null, token: null, isAuthenticated: false });

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <AuthContext.Provider value={{ user: null, token: null, isAuthenticated: false }}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
