import React from "react";
import { SidebarContainer } from "./styled";
import SidebarHeader from "./SidebarHeader/index";
import SidebarMenu from "./SidebarMenu/index";
import SidebarFooter from "./SidebarFooter/index";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </SidebarContainer>
  );
};

export default Sidebar;
