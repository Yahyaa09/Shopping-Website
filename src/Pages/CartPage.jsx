import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CardItem from "../components/CardItem"
import Spinner from "../components/Spinner";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);
  const [loading, setLoading] = useState(true); // Initialize with true to show spinner initially

  useEffect(() => {
    // Simulate data fetching or page load
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after data is loaded
    }, 200); // Simulating a delay for loading

    return () => clearTimeout(timer); // Cleanup timer
  }, []); 

  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
    {
      loading ? (<Spinner/>) :
      (<div>
      {cart.length > 0 ? (
        <div className="flex justify-between w-11/12 max-w-[1200px] flex-col md:flex-row gap-16 sm:gap-28 mt-5 mx-auto mb-10">
          <div className="flex gap-8 w-screen md:w-1/2 flex-col">
              {cart.map((item, index) => (
                <CardItem key={item.id} item={item} index={index}/>
              ))}
          </div>

          <div className="flex flex-col gap-8 md:w-1/2 px-4 justify-between">
            <div>
              <p className="uppercase text-xl font-bold text-green-800 ">Your Cart</p>
              <p className="uppercase text-5xl font-bold text-green-800">Summary</p>
              <p className="capitalise mt-5 text-xl font-bold text-green-800 ">
                Total Items : <span>{cart.length}</span>
              </p>
            </div>

            <div>
              <p className="capitalise text-xl font-bold text-green-800 ">Total Amount : ${totalAmount}</p>
              <button className="capitalise mt-5 text-xl font-bold  text-white border-2 border-green-500 bg-green-700 p-2 rounded-lg w-full hover:bg-white hover:text-green-600 transition duration-200 ">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh] w-screen flex-col gap-4">
          <h1 className="text-xl font-bold ">Your Cart is Empty!</h1>
          <NavLink to="/"><button className="border-2 border-green-600 bg-green-600 px-5 py-2 rounded-lg text-white text-lg capitalize font-bold hover:bg-white hover:text-green-600 transition duration-200">Shop Now</button></NavLink>
        </div>
      )}
    </div>)
    }
    </div>
    
  );
};

export default CartPage;
