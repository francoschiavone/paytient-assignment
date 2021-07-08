import React, { FC } from "react";
import redditFullLogo from "../../../../assets/images/reddit-full-logo.svg";
import { SidebarHeaderContainer } from "./styled";

export const SidebarHeader: FC = () => {
  return (
    <SidebarHeaderContainer>
      <img className="sidebarLogo" alt="Reddit-logo" src={redditFullLogo} />
    </SidebarHeaderContainer>
  );
};

export default SidebarHeader;
