import { SAVE_SEARCH_TYPE_AND_RESULTS } from "../actions";

const initialState = {
  type: '', // will be either "recipes" or "nutrition"
  results: [],
}

export function searchReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SAVE_SEARCH_TYPE_AND_RESULTS: {
      return ({
        ...state,
        type: payload.type,
        results: action.payload.results
      });
    }
    default: {
      return state
    }
  }
}

