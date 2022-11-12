import { createContext, useContext } from "react";

export const StoreContext = createContext();
export const useStoreContext = () => {
  const storeCtx = useContext(StoreContext);
  return storeCtx;
};
