import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);

  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );


  const cartItem = productCartItem.map((item) => {
    return{
        name: item.name,
        qty: item.qty,
    }
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const orderdata = {data, cartItem, totalPrice, totalQty}


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(orderdata)
    const {name,email,address,phone} = data
console.log(data)
    if(name && email && address && phone){
    const fetchData = await fetch(
      `${process.env.REACT_APP_SERVER_DOMIN}/orderFood`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ orderdata}),
      }
    );

    const fetchRes = await fetchData.json();
console.log(data,cartItem,totalPrice,totalQty)
    console.log(fetchRes);
    toast(fetchRes.message);
  } else {
    alert("Please Enter required fields");
  }
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      {productCartItem[0] ? (
        <div className="my-4 flex gap-3">
          <div className="w-full max-w-3xl ">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>
          <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name</label>
          <input
            type={"text"}
            id="name"
            name="name"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.name}
            onChange={handleOnChange}
          />
                    <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Address</label>
          <input
            type={"text"}
            id="address"
            name="address"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.address}
            onChange={handleOnChange}
          />
                    <label htmlFor="lastName">phone</label>
          <input
            type={"text"}
            id="phone"
            name="phone"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.phone}
            onChange={handleOnChange}
          />

          <button className="w-full max-w-[150px] m-auto  bg-blue-300 hover:bg-blue-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
           Order
          </button>
        </form>

          </div>
        </div>
      ) : (
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm" alt="" />
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
