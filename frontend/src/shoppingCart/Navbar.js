import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../ShoppingCart.css'
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="header">
        <h1 className="detail">
          Cafe <span className="name">Metro</span> Shop
        </h1>
        <ul>
          <li>
            <Link to="/shop">
              <i className="fas fa-home main-menu"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>{Object.keys(cart.cartItems).length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
