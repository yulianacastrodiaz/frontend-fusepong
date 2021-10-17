import { LOGIN } from "../actions";

const initialState = {
  profile: {},
  companies: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        profile: action.user,
      };
    default:
      return state;
  }
}