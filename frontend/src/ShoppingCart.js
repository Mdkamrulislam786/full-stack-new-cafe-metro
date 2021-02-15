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

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch,auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [dispatch,auth.authenticate]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/shop" exact component={TestMenu} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/order" exact component={Order} />
          <Route path="/order-completed" exact component={OrderCompleted} />
        </Switch>
        <ModalButton />
      </BrowserRouter>
    </div>
  );
};

export default ShoppingCart;
