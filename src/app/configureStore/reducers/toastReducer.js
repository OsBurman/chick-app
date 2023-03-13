import { SHOW_TOAST, REMOVE_TOAST } from "../actions/actionTypes";

const initialState = {
  show: false,
  title: '',
  type: '',
}

export function toastReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SHOW_TOAST: {
      return ({
        ...state,
        show: true,
        title: payload.title,
        type: payload.type ?? 'success'
      });
    }
    case REMOVE_TOAST: {
      return ({
        ...state,
        show: false
      })
    }
    default: {
      return state
    }
  }
}

