import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart() {
    dispatch(add(post));
    toast.success("Added to Cart");
  }

  function removeFromCart() {
    dispatch(remove(post));
    toast.error("Removed from Cart");
  }

  function navigateToItemPage() {
    navigate(`/item/${post.id}`, { state: { item: post } });
  }

  return (
    <div
      className="flex flex-col items-center justify-between hover:scale-110 hover:shadow-[0_10px_50px_rgb(0,0,0,0.3)] transition duration-300 ease-in shadow-[0_1px_5px_rgb(0,0,0,0.2)] gap-3 p-4 mt-10 ml-5 rounded-xl max-w-[350px] bg-white hover:bg-white cursor-pointer"
      onClick={navigateToItemPage}
    >
      <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 text-left">
        {post.title}
      </p>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left capitalize">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>
      <div className="h-[180px]">
        <img src={post.image} alt="Post Image" className="w-full h-full" />
      </div>
      <div className="flex justify-between w-full items-baseline">
        <p className="text-green-600 font-semibold items-center w-full mt-5 text-lg">
          ${post.price}
        </p>
        {cart.find((p) => p.id == post.id) ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFromCart();
            }}
            className="w-full border-black border-2 rounded-full bg-white text-gray-700 hover:bg-gray-700 hover:text-slate-100 transition duration-300 "
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
            className="w-full border-black border-2 rounded-full bg-white text-gray-700 hover:bg-gray-700 hover:text-slate-100 transition duration-300 "
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
