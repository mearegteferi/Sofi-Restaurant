import React, { useState, useEffect } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/getOrders`
        );
        const data = await response.json();
        setOrders(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      {loading ? (
        <p className="text-gray-600">Loading orders...</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Order ID: {order._id}</h3>
              <p>
                <span className="font-bold">Name:</span> {order.data.name}
              </p>
              <p>
                <span className="font-bold">Email:</span> {order.data.email}
              </p>
              <p>
                <span className="font-bold">Address:</span> {order.data.address}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {order.data.phone}
              </p>
              <p>
                <span className="font-bold">Order Items:</span>
              </p>
              <div className="flex items-center gap-4 md:gap-7">
                <ul>
                  {Object.values(order.cartItems[0]).map((item) => (
                    <div className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">                     
                     <li >
                     {Object.values(order.cartItems[0]).map((key) => (
                      <div>
                        <p>
                          <span className="">Item Name:</span> {key.name}
                        </p>
                        <p>
                          <span className="">Item Quantity:</span> {key.qty}
                        </p>
                        </div>
                     ))}
                      </li>
                      </div>
                  ))}
                </ul>
              </div>
              <p>
                <span className="font-bold">Total Price:</span> $
                {order.totalPrice}
              </p>
              <p>
                <span className="font-bold">Total Quantity:</span>{" "}
                {order.totalQty}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
