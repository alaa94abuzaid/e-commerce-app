import React from "react";

export const ProductsContext = React.createContext({
  cartProducts: [],
  favProducts: [],
  products: [],
  setCartProducts: () => {},
  setFavProducts: () => {},
  setProducts: () => {},
});

export const ProductsProvider = ({ children, productsContext }) => (
  <ProductsContext.Provider value={productsContext}>
    {children}
  </ProductsContext.Provider>
);
