import React, { useContext, useState } from "react";
import cartContext from "../../contexts/CartContext/CartContext";
import { DECREASE, INCREASE, DELETE_CART_ITEM } from "../../contexts/types";
import storeService from "../../services/storeService";
import actionCreator from "../../utils/actionCreator";

const CartItem = (props) => {
  const { item } = props;
  const {cartState, dispatch} = useContext(cartContext);
  const {cart} = cartState;
  const [quantity, setQuantity] = useState(item.orderQuantity);
  //   const { dispatch } = useContext(cartContext);
  const onHandleQuantityChange = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  
  
  const onDecrease = () => {
    let newQuantity = quantity;
    setQuantity(newQuantity > 0 ? newQuantity - 1 : 0);
    dispatch(actionCreator(DECREASE, item));
  };

  const onIncrease = () => {
    let newQuantity = quantity;
    setQuantity(
      newQuantity < item.stock.remain ? newQuantity + 1 : item.stock.remain
    );
    dispatch(actionCreator(INCREASE, item));
  };

  const onRemoveItem = () => {
    dispatch(actionCreator(DELETE_CART_ITEM,item));
  }

  return (
    <div
      key={item._id}
      className="flex flex-wrap justify-between items-center hover:bg-gray-100 px-6 py-5"
    >
      <div className="flex w-full md:w-2/5 pb-4 md:pb-0">
        <div className="flex gap-2">
          <img
            className="w-16 h-16 max-w-full object-cover object-center"
            src={item.image_url}
            alt={item.title}
          />
          <div className="flex flex-col justify-between ml-4 gap-1 md:gap-0 flex-grow">
            <span className="textxs md:text-sm">{item.title}</span>
            {/* Mobile */}
            <div className="w-full md:hidden">
              <span className="text-center w-1/2 md:w-1/5 font-semibold text-sm text-indigo-600">
                {storeService.convertCurrency(item.price, "VND")}
              </span>
            </div>
            <button className="text-left font-semibold hover:text-red-500 text-gray-500 text-xs" onClick = {() => onRemoveItem()}>
              Remove
            </button>
            
          </div>
        </div>
      </div>

      <div className="flex justify-around md:justify-center w-full md:w-1/5">
        <button onClick={() => onDecrease()}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>

        <input
          className="text-sm mx-2 border text-center w-1/2 md:w-8"
          type="text"
          value={quantity > 0 ? quantity : 0}
          onChange={onHandleQuantityChange}
        />

        <button onClick={() => onIncrease()}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="hidden md:inline text-center w-1/2 md:w-1/5 font-semibold text-sm text-indigo-600">
        {storeService.convertCurrency(item.price, "VND")}
      </span>
      <span className="hidden md:inline text-center w-1/2 md:w-1/5 font-semibold text-sm">
        {storeService.convertCurrency(item.price * quantity, "VND")}
      </span>
    </div>
  );
};

export default CartItem;