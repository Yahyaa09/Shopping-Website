import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slices/CartSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Spinner from '../components/Spinner';

const ItemPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const item = location.state?.item; 
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Initialize with true to show spinner initially

  useEffect(() => {
    // Simulate data fetching or page load
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after data is loaded
    }, 200); // Simulating a delay for loading

    return () => clearTimeout(timer); // Cleanup timer
  }, []); 

  function addToCart() {
    dispatch(add(item));
    toast.success('Item added to Cart');
  }

  function checkoutHandler() {
    navigate('/cart');
  }

  function shoppingHandler() {
    navigate('/');
  }

  return (
    <div>
      {loading ? (
        <Spinner /> 
      ) : (
        <div className="flex justify-between w-full gap-10 flex-col md:flex-row mt-10 items-center bg-white">
          <div className="max-w-[35vw] md:max-w-[300px] mx-auto md:ml-auto">
            <img src={item.image} alt="item" />
          </div>
          <div className="flex flex-col gap-4 w-full px-4 md:justify-center md:w-3/5">
            <h1 className="text-lg font-bold text-slate-700 text-center sm:text-left md:text-3xl">{item.title}</h1>
            <p className='text-center sm:text-left md:text-xl md:text-slate-500'>{item.description}</p>
            <p className="font-bold text-green-600 w-full text-2xl text-center sm:text-left">Price : ${item.price}</p>
            <div className="flex flex-col justify-between items-baseline md:flex-row md:gap-10 text-nowrap md:pr-10">
              <div className='w-full'>
                {cart.find((p) => p.id === item.id) ? (
                  <button
                    className="capitalize mt-5 text-xl px-2 font-bold text-white border-2 border-green-500 bg-green-700 rounded-lg hover:bg-white hover:text-green-600 transition duration-200 w-full py-1"
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <button
                    className="capitalize mt-5 px-2 text-xl font-bold text-white border-2 border-green-500 bg-green-700 rounded-lg hover:bg-white hover:text-green-600 transition duration-200 w-full py-1"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              <button
                className="capitalize mt-2 mb-3 px-2 text-xl font-bold text-white border-2 border-violet-700 bg-violet-700 rounded-lg hover:bg-white hover:text-violet-600 transition duration-200 w-full py-1"
                onClick={shoppingHandler}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPage;
