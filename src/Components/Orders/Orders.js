import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider/StateProvider";
import OrderComponent from "./OrderComponent";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      //Make sure that it only shows if user is loged in
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <OrderComponent order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
