import {
  GET_TILLIST_FETCHING,
  GET_TILLIST_FULFILLED,
  GET_TILLIST_REJECTED,
} from "./constants";

export interface TodayILearnedListState {
  dataList: TodayILearnedListItem[];
}

export interface GetTILListFetchingAction {
  type: typeof GET_TILLIST_FETCHING;
}

export interface GetTILListFulfilledAction {
  type: typeof GET_TILLIST_FULFILLED;
  payload: TodayILearnedListItem[];
}

export interface GetTILListRejectedAction {
  type: typeof GET_TILLIST_REJECTED;
}

export interface TodayILearnedListItem {
  link: string;
  itemtitle?: string;
  image?: string;
  commentsNumber?: number;
}

export type TILListActions =
  | GetTILListFetchingAction
  | GetTILListFulfilledAction
  | GetTILListRejectedAction;
