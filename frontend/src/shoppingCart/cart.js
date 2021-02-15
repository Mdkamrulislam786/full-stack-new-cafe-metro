import React, { Fragment } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartColumns from "./CartColumns/CartColumns";
import CartTotals from "./CartTotals/CartTotals";
import "./cart.css";

const Cart = (props) => {
  // const { cart } = props.testReducer;
  let cart = [0, 1];
  const showCart = () => {
    if (cart.length > 0) {
      return (
        <Fragment>
          <div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "20px",
                fontFamily: "Robotto",
              }}
            >
              Your Cart
            </h2>
          </div>
          <CartColumns />
          <CartList />
          <CartTotals />
        </Fragment>
      );
    } else {
      return <EmptyCart />;
    }
  };
  return <section>{showCart()}</section>;
};

export default Cart;
