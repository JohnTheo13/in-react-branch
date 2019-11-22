import { createActions } from "redux-actions";

export const { changeHeader, change } = createActions(
  "CHANGE_HEADER",
  "CHANGE"
);
