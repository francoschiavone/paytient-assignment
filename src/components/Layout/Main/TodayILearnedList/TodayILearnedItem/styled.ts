import styled from "styled-components";

export const TodayILearnedItemContainer = styled.div`
  display: flex;
  background-color: #fff;
  border: 2px solid #e4e1fc;
  width: 720px;
  margin-bottom: 28px;
  .a {
    text-decoration: none;
  }
`;

export const TodayILearnedItemImage = styled.img`
  height: 135px;
  margin: 12px;
  width: 135px;
  border-radius: 10px;
`;

export const TodayILearnedItemData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-size: 14px;
  flex: 1;

  .itemTitle {
    flex: 1;
    margin: 0;
  }

  .commentsContainer {
    display: flex;
    justify-content: flex-end;
  }

  .comments {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: 2px solid #ebe9f0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .commentsIcon {
    width: 16px;
    margin-right: 10px;
  }

  .link {
    height: 36px;
    color: #403644;
    display: flex;
    text-decoration: none;
  }

  .commentsNumber {
    display: flex;
    border-top: 2px solid #ebe9f0;
    border-right: 2px solid #ebe9f0;
    border-bottom: 2px solid #ebe9f0;
    justify-content: center;
    align-items: center;
    width: 55px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
