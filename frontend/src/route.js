import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//COMPONENTS
import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";
import MenuHome from "./components/Home/Body/Menu/menu-home";
import MainMenu from "./components/Home/Body/Menu/MenuMain/MainMenu";
import ShoppingCart from "./ShoppingCart";
import Catering from "./components/Home/Body/Menu/OurServices/services/catering";
import Wedding from "./components/Home/Body/Menu/OurServices/services/Wedding";
import OurStory from "./components/Home/Body/Menu/OurServices/services/OurStory";
import Profile from "./components/Home/Profile/Profile";
import MenuItems from "./shoppingCart/MenuItems";
import CheckoutPage from "./shoppingCart/CheckoutPage";
import OrderDetailsPage from "./shoppingCart/OrderDetailsPage";
import OrderPage from "./shoppingCart/OrderPage";
import Cart from "./shoppingCart/cart";
import Order from "./shoppingCart/Order/Order";
import OrderCompleted from "./shoppingCart/Order/OrderCompleted";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import Reset from "./components/Reset";
import NewPassword from "./components/NewPassword";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

const Routes = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [dispatch, auth.authenticate]);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Menu" exact component={MenuHome} />
        <Route path="/MainMenu" exact component={MainMenu} />
        <Route path="/shop" exact component={ShoppingCart} />
        <Route path="/Catering-services" exact component={Catering} />
        <Route path="/Wedding-services" exact component={Wedding} />
        <Route path="/our-story" exact component={OurStory} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/account/orders" exact component={OrderPage} />
        <Route
          path="/order_details/:orderId"
          exact
          component={OrderDetailsPage}
        />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/order" exact component={Order} />
        <Route path="/order-completed" exact component={OrderCompleted} />
        <Route path="/shop/:slug" exact component={MenuItems} />
        <Route path="/reset" exact component={Reset} />
        <Route path="/reset/:token" exact component={NewPassword} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Layout>
  );
};

export default Routes;
