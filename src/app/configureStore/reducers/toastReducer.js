/************************
 * 
 * State
 *  
 * **********************/

const initialState = {
  show: false,
  title: '',
  type: '',
}


/************************
 * 
 * Actions
 *  
 * **********************/

const SHOW_TOAST = 'SHOW_TOAST';
const REMOVE_TOAST = 'REMOVE_TOAST';


/************************
 * 
 * Action Creators
 *  
 * **********************/

export const showToast = (payload) => {
  return ({
    type: SHOW_TOAST,
    payload,
  })
}

export const removeToast = () => {
  return ({
    type: REMOVE_TOAST,
  })
}


/************************
 * 
 * Reducer
 *  
 * **********************/

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

