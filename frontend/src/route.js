import React, { Component } from "react";
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
import TestMenu from "./shoppingCart/TestMenu";
import Profile from "./components/Home/Profile/Profile";
import MenuItems from "./shoppingCart/MenuItems";

class Routes extends Component {
  render() {
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
          <Route path="/shop/:slug" exact component={MenuItems} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
