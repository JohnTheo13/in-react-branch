import { handleActions } from "redux-actions";
import { changeHeader } from "./actions";

// const { ...envVars } = process.env;

export interface State {
  header: string;
}

export interface Action {
  payload: any;
  type: string;
}

export const initialState: State = {
  header: "APP"
};

export const reducer = handleActions(
  {
    [changeHeader.toString()]: (state, { payload }: Action): State => ({
      ...state,
      header: payload
    })
  },
  initialState
);
