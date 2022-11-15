import { ADD_TO_CART, DELETE_PRODUCT, INCREASE, DECREASE } from "../types";

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const { orders } = payload.user;
      const { products } = orders.length > 0 ? products : [];
      let newCart = [...orders];
      const searchedItem = products.find((item) => {

      });

    /*  if() {

      } */
  }
};

export default cartReducer;
