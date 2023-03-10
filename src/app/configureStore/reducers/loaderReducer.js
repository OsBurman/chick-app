/************************
 * 
 * State
 *  
 * **********************/

const initialState = {
  show: false,
}


/************************
 * 
 * Actions
 *  
 * **********************/

const SHOW_LOADER = 'SHOW_LOADER';


/************************
 * 
 * Action Creators
 *  
 * **********************/

export const showLoader = (payload) => {
  return ({
    type: SHOW_LOADER,
    payload,
  })
}


/************************
 * 
 * Reducer
 *  
 * **********************/

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

