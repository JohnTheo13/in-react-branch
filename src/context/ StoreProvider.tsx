import React, {
  ContextType,
  createContext,
  FunctionComponentElement,
  ReactChild,
  useReducer
} from "react";
import { initialState, State } from "./reducer";

interface Store {
  children: ReactChild;
}

export interface Context {
  state: State;
  dispatch: void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreContext = createContext<ContextType<Context | any>>(initialState);

const StoreProvider = ({
  children
}: Store): FunctionComponentElement<Store> => {
  const [state, dispatch] = useReducer(() => initialState, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export { StoreContext };
