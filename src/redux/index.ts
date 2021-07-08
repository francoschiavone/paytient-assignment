import { combineReducers, createStore, applyMiddleware } from "redux";

import { todayILearnedList } from "./todayILearnedList/reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todayILearnedList,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
