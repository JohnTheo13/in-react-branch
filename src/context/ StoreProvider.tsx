import React, { createContext, useReducer, ContextType, FunctionComponentElement } from "react";
import { initialState, State, reducer } from "./reducer";

interface Store {
  children: React.ReactChild;
}

export interface Context {
  state: State;
  dispatch: void;
}

const StoreContext = createContext<ContextType<Context | any>>(
  initialState
);

const StoreProvider = ({
  children
}: Store): FunctionComponentElement<Store> => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export { StoreContext };
