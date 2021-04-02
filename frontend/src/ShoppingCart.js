import React from "react";
import Navbar from "./shop/Navbar";
// import MainMenuHome from "./shop/Home";
import TestMenu from "./shop/Menu";
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
