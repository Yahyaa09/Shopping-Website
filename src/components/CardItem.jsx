import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ item , index }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function navigateToItemPage() {
    navigate(`/item/${item.id}`, { state: { item: item } });
  }

  function removeFromCart(e) {
    e.stopPropagation(); // Prevent navigation when clicking remove
    dispatch(remove(item));
    toast.success("Item removed from Cart");
  }

  return (
    <div className={`flex justify-between w-full mx-auto gap-10 flex-col cursor-pointer md:flex-row ${index !== 0 ? 'border-t-2 pt-6 border-slate-600 pr-2' : ''}`} onClick={navigateToItemPage}>
      <div className='w-full'>
        <img src={item.image} alt="item" className='w-40 md:w-[10vw] md:ml-auto mx-auto'/>
      </div>
      <div className='flex flex-col gap-4 w-full px-4'>
        <h1 className='text-lg font-bold text-slate-700'>{item.title}</h1>
        <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-green-600 text-xl'>${item.price}</p>
          <button onClick={removeFromCart} className='text-red-700 bg-red-300 rounded-full p-2 mr-10 hover:bg-red-700 hover:text-white duration-300 transition'>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
