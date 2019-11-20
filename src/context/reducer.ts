// import { handleActions } from "redux-actions";
// import { setToken, checkSupport, checkEnabled, setTagId } from "./actions";

// const { ...envVars } = process.env;

export interface State {
  supported: boolean;
  enabled: boolean;
  tagId: string;
  accessToken: string | null;
  accessTokenTimestamp: number | null;
}

export interface Action {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  type: string;
}

export const initialState: State = {
  supported: false,
  enabled: true, // PRODUCTION false
  tagId: "",
  accessToken: null,
  accessTokenTimestamp: null
};

// export const reducer = handleActions(
//   {
//     [checkSupport.toString()]: (state, { payload }: Action): State => ({
//       ...state,
//       supported: payload
//     }),
//     [checkEnabled.toString()]: (state, { payload }: Action): State => ({
//       ...state,
//       enabled: payload
//     }),
//     [setTagId.toString()]: (state, { payload }: Action): State => ({
//       ...state,
//       tagId: payload
//     }),
//     [setToken.toString()]: (state, { payload }: Action): State => ({
//       ...state,
//       accessToken: payload,
//       accessTokenTimestamp: Date.now()
//     })
//   },
//   initialState
// );