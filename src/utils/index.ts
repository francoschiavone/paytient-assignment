import { TodayILearnedListItem } from "../redux/todayILearnedList/types";

export const jsontoTIL = (item: any): TodayILearnedListItem => {
  return {
    link: item.data.permalink,
    itemtitle: item.data.title,
    image: item.data.thumbnail,
    commentsNumber: item.data.num_comments,
  };
};
