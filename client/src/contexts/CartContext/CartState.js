import {useReducer, useContext} from 'react';
import cartReducer from "./CartReducer.js";
import CartContext from "./CartContext.js";
import authContext from "../../contexts/AuthContext/AuthContext";

const CartState = (props) => {
  /* const {user} = props;
  user && console.log("User",user); */
  const initialSate = {
    userId: "",
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  }
  const [cartState, dispatch] = useReducer(cartReducer, initialSate);

  return (
    <CartContext.Provider value={{
      cartState,
      dispatch
    }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartState