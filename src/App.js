import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import axios from "axios";

import { ProductsProvider } from "./components/providers/ProductsProvider";
import { Cart, Login, Home } from "./pages";
import { SessionProvider } from "./components/providers/SessionProvider";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favProducts, setFavProducts] = useState([]);
  const [user, setUser] = useState(undefined);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products`
      );
      setProducts(data.products);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <SessionProvider sessionContext={{ setUser, user }}>
        <ProductsProvider
          productsContext={{
            cartProducts,
            favProducts,
            products,
            setCartProducts,
            setFavProducts,
            setProducts,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate replace to={"/login"} />}
              />
              <Route path="login" element={<Login />} />
              <Route
                path="cart"
                element={user ? <Cart /> : <Navigate replace to={"/login"} />}
              />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </SessionProvider>
    </>
  );
}

export default App;
