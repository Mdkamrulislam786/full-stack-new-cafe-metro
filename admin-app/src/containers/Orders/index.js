import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import moment from 'moment'
import "./style.css";

const Orders = (props) => {
  const order = useSelector((state) => state.order);
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [orderList, setOrderLists] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  console.log("orders", orderList);

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  useEffect(() => {
    let orders = order.orders;
    setOrderLists(orders);
  }, []);

  useEffect(() => {
    setFilteredOrders(
      orderList?.reverse().filter((order) => {
        return order._id.toString()?.toLowerCase().includes(searchTerm?.toLowerCase());
      })
    );
  }, [searchTerm, orderList]);

 const handleSearch = (event) => {
   event.preventDefault();
 };
  return (
    <Layout sidebar>
      <div className="searchOrder">
        <div onSubmit={handleSearch} className="search">
          <form className="searchform">
            <input
              className="search__input"
              type="text"
              placeholder="order num..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <i className="fas fa-search" style={{ color: "#2167b9" }}></i>
          </form>
        </div>
      </div>
      {filteredOrders.map((orderItem, index) => (
        <Card
          style={{
            margin: "10px 0",
          }}
          key={index}
          headerLeft={orderItem._id}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="title">Items</span>
              {orderItem.items.map((item, index) => (
                <div className="value" key={index}>
                  {item.productId?.name}
                  --{`(q-${item.purchasedQty} * p:${item.payablePrice}tk)`}
                </div>
              ))}
            </div>
            <div>
              <span className="title">Total Price</span>
              <br />
              <span className="value">{orderItem.totalAmount}tk</span>
            </div>
            <div>
              <span className="title">Payment Type</span> <br />
              <span className="value">{orderItem.paymentType}</span>
            </div>
            <div>
              <span className="title">Payment Status</span> <br />
              <span className="value">{orderItem.paymentStatus}</span>
            </div>
            <div>
              <span className="title">Ordered At</span> <br />
              <span className="value">
                {moment(orderItem.createdAt).calendar()}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <p>Adrress:</p>
            <p>{orderItem.addressId}</p>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              padding: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="orderTrack">
              {orderItem.orderStatus.map((status, i) => (
                <div
                  key={i}
                  className={`orderStatus ${
                    status.isCompleted ? "active" : ""
                  }`}
                >
                  <div
                    className={`point ${status.isCompleted ? "active" : ""}`}
                  ></div>
                  <div className="orderInfo">
                    <div className="status">{status.type}</div>
                    <div className="date">{formatDate(status.date)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* select input to apply order action */}
            <div
              style={{
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <select onChange={(e) => setType(e.target.value)}>
                <option value={""}>select status</option>
                {orderItem.orderStatus.map((status, i) => {
                  return (
                    <Fragment key={i}>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </Fragment>
                  );
                })}
              </select>
            </div>
            {/* button to confirm action */}

            <div
              style={{
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <button onClick={() => onOrderUpdate(orderItem._id)}>
                confirm
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Layout>
  );
};

export default Orders;
