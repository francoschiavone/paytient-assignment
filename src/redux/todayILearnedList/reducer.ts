import {
  GET_TILLIST_FETCHING,
  GET_TILLIST_FULFILLED,
  GET_TILLIST_REJECTED,
} from "./constants";

import { TodayILearnedListState, TILListActions } from "./types";

export const initialState: TodayILearnedListState = {
  dataList: [],
};

export const todayILearnedList = (
  state = initialState,
  action: TILListActions
): TodayILearnedListState => {
  switch (action.type) {
    case GET_TILLIST_FETCHING:
      return {
        ...state,
      };
    case GET_TILLIST_FULFILLED:
      return {
        ...state,
        dataList: action.payload,
      };
    case GET_TILLIST_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
