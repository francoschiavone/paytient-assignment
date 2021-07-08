import styled from "styled-components";

export const SidebarMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline-start: 0px;
  margin-top: 0px;
  font-family: "Inter Regular";
  height: 100%;
`;

export const MenuSelectedOption = styled.a`
  display: flex;
  width: 95%;
  font-size: 15px;
  color: #38374a;
  background-color: #f5f5f8;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 2px;

  .menuOptionTitle {
    padding-left: 16px;
  }

  .homeIcon {
    padding-left: 8px;
  }

  .peopleIcon {
    padding-left: 8px;
  }
`;

export const MenuOption = styled.a`
  display: flex;
  width: 95%;
  font-size: 15px;
  color: #53596c;
  background-color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 2px;

  .menuOptionTitle {
    padding-left: 16px;
  }

  .homeIcon {
    padding-left: 8px;
  }

  .peopleIcon {
    padding-left: 8px;
  }
`;
