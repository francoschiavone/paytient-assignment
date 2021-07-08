import React, { useEffect } from "react";
import { TodayILearnedListContainer } from "./styled";
import TodayILearnedItem from "./TodayILearnedItem/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/index";
import { getTodayILearnedList } from "../../../../redux/todayILearnedList/actions";

export const TodayILearnedList: React.FC = () => {
  const tilList = useSelector(
    (state: RootState) => state.todayILearnedList.dataList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayILearnedList());
  }, [dispatch]);

  const itemsList = tilList.map((til) => (
    <TodayILearnedItem
      image={til.image}
      link={til.link}
      itemTitle={til.itemtitle}
      commentsNumber={til.commentsNumber}
    />
  ));

  return <TodayILearnedListContainer>{itemsList}</TodayILearnedListContainer>;
};

export default TodayILearnedList;
