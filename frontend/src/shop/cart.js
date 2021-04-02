import React, { Fragment, useEffect, useState } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartColumns from "./CartColumns/CartColumns";
import CartTotals from "./CartTotals/CartTotals";
import "./cart.css";
import CartItems from "./CartItems/CartItems";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems, removeCartItem } from "../actions";
import Navbar from "./Navbar";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems === true) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItems
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
            keepRemove
          />
        ))}
      </>
    );
  }

  const showCart = () => {
    if (
      Object.keys(cartItems).length === 0 &&
      cartItems.constructor === Object
    ) {
      return (
        <>
          <Navbar />
          <EmptyCart />
        </>
      );
    } else {
      return (
        <Fragment>
          <Navbar />
          <div style={{ paddingTop: "8rem", textAlign: "center" }}>
            <h2
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontFamily: "Robotto",
              }}
            >
              Your Cart
            </h2>
       
            <p style={{ marginBottom: "20px", marginTop: "0px" }}>
              Reload the page if you get a wrong total price
            </p>
          </div>
          <CartColumns />

          {Object.keys(cartItems).map((key, index) => (
            <CartItems
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}

          <CartTotals
            totalPrice={Object.keys(cart.cartItems).reduce(
              (totalPrice, key) => {
                const { price, qty } = cart.cartItems[key];
                return totalPrice + price * qty;
              },
              0
            )}
          />
        </Fragment>
      );
    }
  };
  return <section>{showCart()}</section>;
};

export default Cart;
