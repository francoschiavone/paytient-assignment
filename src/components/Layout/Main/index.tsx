import React from "react";
import { MainContainer } from "./styled";
import MainHeader from "./MainHeader/index";
import TodayILearnedList from "./TodayILearnedList/index";

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainHeader />
      <TodayILearnedList />
    </MainContainer>
  );
};

export default Main;
