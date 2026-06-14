"use client";
import React, { createContext, useContext } from "react";

type CartCtx = {
  cart: any[];
  addItem?: (item: any) => void;
  removeItem?: (id: any) => void;
  clear?: () => void;
};

const CartContext = createContext<CartCtx>({ cart: [] });

export const CartProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <CartContext.Provider value={{ cart: [] }}>{children}</CartContext.Provider>
);

export const useCart = () => useContext(CartContext);

export default CartContext;
