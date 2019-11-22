import React, { useContext } from "react";

import { StoreContext, Context } from "../../context/ StoreProvider";
import { changeHeader } from "../../context/actions";

export default () => {
  const { dispatch } = useContext<Context | any>(StoreContext);
  return (
    <input
      type="text"
      onChange={({ target: { value } }) => dispatch(changeHeader(value))}
    />
  );
};
