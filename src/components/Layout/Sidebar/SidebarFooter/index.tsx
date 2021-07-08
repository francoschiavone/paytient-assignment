import React, { FC } from "react";
import avatar from "../../../../assets/images/tom-cook-avatar.png";
import { SidebarFooterContainer, UserContainer } from "./styled";

export const SidebarFooter: FC = () => {
  return (
    <SidebarFooterContainer>
      <img className="avatar" alt="Avatar" src={avatar} />
      <UserContainer>
        <span className="userName">Tom Cook</span>
        <a className="userProfile" href="/">
          View profile
        </a>
      </UserContainer>
    </SidebarFooterContainer>
  );
};

export default SidebarFooter;
