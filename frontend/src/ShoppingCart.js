import React from "react";
import Navbar from "./shoppingCart/Navbar";
// import MainMenuHome from "./shoppingCart/Home";
import TestMenu from "./shoppingCart/TestMenu";
import "./ShoppingCart.css";
import ModalButton from "./components/widgets/Modals/ItemInfoModal";

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
