import React, { FC } from "react";
import homeIcon from "../../../../assets/icons/home-icon.svg";
import peopleIcon from "../../../../assets/icons/people-icon.svg";
import { MenuOption, MenuSelectedOption, SidebarMenuContainer } from "./styled";

export const SidebarMenu: FC = () => {
  return (
    <SidebarMenuContainer>
      <MenuSelectedOption href="/">
        <img className="homeIcon" alt="home-icon" src={homeIcon} />
        <p className="menuOptionTitle"> r/todayilearned</p>
      </MenuSelectedOption>
      <MenuOption href="/">
        <img className="peopleIcon" alt="people-icon" src={peopleIcon} />
        <p className="menuOptionTitle"> Placeholder</p>
      </MenuOption>
    </SidebarMenuContainer>
  );
};

export default SidebarMenu;
