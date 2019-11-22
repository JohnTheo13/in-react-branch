import React, { useContext } from "react";
import styled from "styled-components";

import { Context, StoreContext } from "../../context/ StoreProvider";

const StyledHeader = styled.div`
  background-color: ${({ theme: { primary } }) => primary};
  padding: ${({ theme: { whitespaceM, whitespaceS } }) =>
    `${whitespaceM} ${whitespaceS}`};
  > h1 {
    color: ${({ theme: { textWhite } }) => textWhite};
    margin: 0;
  }
`;

StyledHeader.defaultProps = {
  theme: {
    primary: "green",
    textWhite: "#ffffff",
    whitespaceM: "24px",
    whitespaceS: "12px"
  }
};

const Header = () => {
  const { state: { header } } = useContext<Context | any>(StoreContext);
  return (
    <StyledHeader>
      <h1>{header}</h1>
    </StyledHeader>
  );
};

export default Header;
