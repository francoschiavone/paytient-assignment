import React, { FC } from "react";
import tilSubredditLogo from "../../../../../assets/images/til-subreddit-logo.svg";
import { TitleContainer } from "./styled";

export const HeaderTitle: FC = () => {
  return (
    <TitleContainer>
      <img className="titleLogo" alt="TIL-logo" src={tilSubredditLogo} />
      <p className="titleText">Today I Learned (TIL) </p>
    </TitleContainer>
  );
};

export default HeaderTitle;
