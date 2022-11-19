import { useContext } from "react";
import authContext from "../AuthContext/AuthContext";
import storeService from "../../services/storeService";
import { ADD_TO_CART, DELETE_CART_ITEM, INCREASE, DECREASE } from "../types";

const cartReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ADD_TO_CART:
      console.log(payload);
      let newCart = [];
      const { item, orderQuantity } = payload;
      // let newCart = [];
      const addedItemInd = state.cart.findIndex(
        (cartItem) => cartItem._id === item._id
      );
      if (addedItemInd === -1) {
        const newItem = { ...item, orderQuantity };
        newCart = [...state.cart, newItem];
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        newCart = [...state.cart];
        newCart[addedItemInd].orderQuantity += orderQuantity;
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      
      return { ...state, cart: newCart };

    case DECREASE:
      let newCart2 = [];
      let selectedIndx = storeService.findItemIndex(state.cart, payload._id);
      newCart2 = [...state.cart];
      newCart2[selectedIndx].orderQuantity -=1;
      localStorage.setItem("cart", JSON.stringify(newCart2));
      return { ...state, cart: newCart2 };

    case INCREASE:
      let newCart3 = [];
      console.log(payload)
      let selectedIndx2 = storeService.findItemIndex(state.cart, payload._id);
      newCart3 = [...state.cart];
      newCart3[selectedIndx2].orderQuantity +=1;
      localStorage.setItem("cart", JSON.stringify(newCart3));
      return { ...state, cart: newCart3 };

    case DELETE_CART_ITEM:
      const remainCart = state.cart.filter((cartItem) => cartItem._id !== payload._id);
      localStorage.setItem("cart", JSON.stringify(remainCart));
      return { ...state, cart: remainCart };

    default:
      return state;
  }
};

export default cartReducer;
