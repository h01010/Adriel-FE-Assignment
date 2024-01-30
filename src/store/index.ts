import { createContext, useContext } from "react";
import TimeStore from "./timeStore/timeStore";

const timeStore = new TimeStore();

export const store = {
  timeStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
