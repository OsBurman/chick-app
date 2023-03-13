import { SHOW_LOADER } from '../actions';

const initialState = {
  show: false,
}

export function loaderReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SHOW_LOADER: {
      return ({
        ...state,
        show: payload
      });
    }
    default: {
      return state
    }
  }
}

