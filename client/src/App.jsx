import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Cart from "./pages/Cart"
import Login from "./pages/Login";
import BagProducts from "./pages/BagProducts";
import TShirtProducts from "./pages/TShirtProducts";
import Home from "./pages/Home";
import JacketProducts from "./pages/JacketProducts";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/BagProducts" element={<BagProducts />} />
        <Route path="/TShirtProducts" element={<TShirtProducts />} />
        <Route path="/JacketProducts" element={<JacketProducts />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
