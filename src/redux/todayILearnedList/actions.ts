import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  GET_TILLIST_FETCHING,
  GET_TILLIST_FULFILLED,
  GET_TILLIST_REJECTED,
} from "./constants";
import { jsontoTIL } from "../../utils/index";
import {
  GetTILListFetchingAction,
  GetTILListFulfilledAction,
  GetTILListRejectedAction,
  TodayILearnedListItem,
} from "./types";
import { RootState } from "../index";
import * as TILSAPI from "../../api/todayILearned";

export const getTodayILearnedListFetching = (): GetTILListFetchingAction => {
  return {
    type: GET_TILLIST_FETCHING,
  };
};

export const getTodayILearnedListFulfilled = (
  tilList: TodayILearnedListItem[]
): GetTILListFulfilledAction => {
  return {
    type: GET_TILLIST_FULFILLED,
    payload: tilList,
  };
};

export const getTodayILearnedListRejected = (): GetTILListRejectedAction => {
  return {
    type: GET_TILLIST_REJECTED,
  };
};

export const getTodayILearnedList =
  () =>
  async (
    dispatch: ThunkDispatch<RootState, Record<string, unknown>, AnyAction>
  ): Promise<Response> => {
    dispatch(getTodayILearnedListFetching());
    try {
      const response = await TILSAPI.getTILS();
      if (response.ok) {
        const data = await response.json();
        const tilList = data.data.children.map(jsontoTIL);
        dispatch(getTodayILearnedListFulfilled(tilList));
      } else {
        dispatch(getTodayILearnedListRejected());
      }
      return response;
    } catch (e) {
      dispatch(getTodayILearnedListRejected());
      return e;
    }
  };
