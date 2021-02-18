import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../actions";
import "../Profile.css";
import { generatePublicUrl } from "../../../../urlConfig";

const Orders = () => {
  const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <div>
      {user.orders.map((order) => {
        return order.items.map((item,i) => (
          <Card key={i} style={{ display: "block", margin: "5px 0" }}>
            <Link
              to={`/order_details/${order._id}`}
              className="orderItemContainer"
            >
              <div className="orderImgContainer">
                <img
                  className="orderImg"
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                />
              </div>
              <div className="orderRow">
                <div className="orderName">{item.productId.name}</div>
                <div className="orderPrice">{item.payablePrice}</div>
                <div>{order.paymentStatus}</div>
              </div>
            </Link>
          </Card>
        ));
      })}
    </div>
  );
};

export default Orders;
