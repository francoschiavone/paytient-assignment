import React from "react";
import commentsIcon from "../../../../../../src/assets/icons/comments-icon.svg";
import {
  TodayILearnedItemContainer,
  TodayILearnedItemImage,
  TodayILearnedItemData,
} from "./styled";

interface TodayILernedItemProps {
  image?: string;
  link: string;
  itemTitle?: string;
  commentsNumber?: number;
}

export const TodayILearnedItem: React.FC<TodayILernedItemProps> = ({
  image,
  link,
  itemTitle,
  commentsNumber,
}) => {
  return (
    <TodayILearnedItemContainer>
      <a className="link" href={`https://www.reddit.com${link}`}>
        <TodayILearnedItemImage alt="Today I learned image" src={image} />
      </a>
      <TodayILearnedItemData>
        <span className="itemTitle">{itemTitle}</span>
        <div className="commentsContainer">
          <a className="link" href={`https://www.reddit.com${link}`}>
            <div className="comments">
              <img
                className="commentsIcon"
                src={commentsIcon}
                alt="comments-icon"
              />
              Comments
            </div>
          </a>
          <div className="commentsNumber">
            <span>{commentsNumber}</span>
          </div>
        </div>
      </TodayILearnedItemData>
    </TodayILearnedItemContainer>
  );
};

export default TodayILearnedItem;
