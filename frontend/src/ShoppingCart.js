import React, { useEffect } from "react";
import Navbar from "./shoppingCart/Navbar";
// import MainMenuHome from "./shoppingCart/Home";
import TestMenu from "./shoppingCart/TestMenu";
import Order from "./shoppingCart/Order/Order";
import OrderCompleted from "./shoppingCart/Order/OrderCompleted";
import "./ShoppingCart.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModalButton from "./components/widgets/Modals/ItemInfoModal";
import Checkout from "./shoppingCart/Checkout/Checkout";
import Cart from "./shoppingCart/cart";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import MenuItems from "./shoppingCart/MenuItems";

const ShoppingCart = () => {
 
  return (
    <div className="App">
      <Navbar />
      <TestMenu />
      <ModalButton />
    </div>
  );
};

export default ShoppingCart;
