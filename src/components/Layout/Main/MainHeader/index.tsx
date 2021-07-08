import React, { FC } from "react";
import { HeaderContainer } from "./styled";
import HeaderTitle from "./HeaderTitle/index";

export const MainHeader: FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle />
    </HeaderContainer>
  );
};

export default MainHeader;
