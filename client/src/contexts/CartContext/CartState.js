import {useReducer, useContext} from 'react';
import cartReducer from "./CartReducer.js";
import CartContext from "./CartContext.js";
import authContext from "../../contexts/AuthContext/AuthContext";

import { ADD_TO_CART, DELETE_PRODUCT } from '../types';

const CartState = (props) => {
  const {user} = useContext(authContext).state;
  user && console.log("User",user);
  const initialSate = {
    cart: {
      userId: "",
      orders: [],
    }
  }
  const [state, dispatch] = useReducer(cartReducer, initialSate);

  return (
    <CartContext.Provider value={{
      state,
      dispatch
    }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartState