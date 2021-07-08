import React, { FC } from "react";
import { LayoutContainer } from "./styled";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";

export const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Main />
    </LayoutContainer>
  );
};

export default Layout;
