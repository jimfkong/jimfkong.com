import { GET_CONTACT_LINKS } from "./../actions/ContactLinks.actions";
import { ContactLink } from "src/app/models/ContactLink";
import { Action } from "redux";

export interface State {
  contactLinks: ContactLink[];
}

export const initialState: State = {
  contactLinks: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_CONTACT_LINKS: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
