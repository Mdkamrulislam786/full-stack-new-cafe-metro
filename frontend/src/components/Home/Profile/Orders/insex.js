import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../actions";
import "../Profile.css";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";

const Orders = ({ userName }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("userorder", user.orders);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const history = useHistory();
  return (
    <div className="profile__order">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Num (click to see info)</th>
            <th>Name</th>
            <th>Total</th>
            <th>Status</th>
            <th>Ordered At</th>
          </tr>
        </thead>
        <tbody>
          {user.orders.reverse().map((order, i) => (
            <tr
              key={i}
              onClick={() => history.push(`/order_details/${order._id}`)}
            >
              <td>{order._id}</td>
              <td> {userName} </td>
              <td>
                {order.items
                  .map((item) => item.payablePrice * item.purchasedQty)
                  .reduce((acc, current) => {
                    return acc + current;
                  }, 0)}{" "}
                tk
              </td>
              <td>
                {
                  order.orderStatus
                    .filter((item) => item.isCompleted === true)
                    .reverse()[0].type
                }
              </td>
              <td> {moment(order.orderStatus[0].date).calendar()} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;

// {
//   user.orders.map((order) => {
//     return order.items.map((item, i) => (
//       <Card key={i} style={{ display: "block", margin: "5px 0" }}>
//         <Link
//           to={`/order_details/${order._id}`}
//           className="orderItemContainer"
//         >
//           <div className="orderImgContainer">
//             <img
//               className="orderImg"
//               src={generatePublicUrl(
//                 item.productId.productPictures[0].img
//               )}
//             />
//           </div>
//           <div className="orderRow">
//             <div className="orderName">{item.productId.name}</div>
//             <div className="orderPrice">{item.payablePrice}</div>
//             <div>{order.paymentStatus}</div>
//           </div>
//         </Link>
//       </Card>
//     ));
//   });
// }
