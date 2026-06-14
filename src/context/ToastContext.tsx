"use client";
import React, { createContext, useContext } from "react";

type ToastCtx = { toast: (msg: string) => void };

const ToastContext = createContext<ToastCtx>({ toast: () => {} });

export const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ToastContext.Provider value={{ toast: () => {} }}>{children}</ToastContext.Provider>
);

export const useToast = () => useContext(ToastContext);

export default ToastContext;
