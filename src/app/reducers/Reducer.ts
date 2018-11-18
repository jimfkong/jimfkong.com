import * as fromContactLinks from "./ContactLinks.reducer";
import { combineReducers } from "redux";

export const initialState: State = {
  contactLinks: fromContactLinks.initialState
};

export interface State {
  contactLinks: fromContactLinks.State;
}

export const reducer = combineReducers<State>({
  contactLinks: fromContactLinks.reducer
});
