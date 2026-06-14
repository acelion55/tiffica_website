"use client";
import React, { createContext, useContext } from "react";

type LocationCtx = {
  location: any | null;
  setLocation?: (l: any) => void;
  ready: boolean;
};

const LocationContext = createContext<LocationCtx>({ location: null, ready: false });

export const LocationProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <LocationContext.Provider value={{ location: null, ready: false }}>{children}</LocationContext.Provider>
);

export const useLocation = () => useContext(LocationContext);

export default LocationContext;
