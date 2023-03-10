/************************
 * 
 * State
 *  
 * **********************/

const initialState = {
  type: '', // will be either "recipes" or "nutrition"
  results: [],
}


/************************
 * 
 * Actions
 *  
 * **********************/

const SAVE_SEARCH_TYPE_AND_RESULTS = 'SAVE_SEARCH_TYPE_AND_RESULTS';


/************************
 * 
 * Action Creators
 *  
 * **********************/

export const saveSearchTypeAndResults = (payload) => {
  return ({
    type: SAVE_SEARCH_TYPE_AND_RESULTS,
    payload,
  })
}


/************************
 * 
 * Reducer
 *  
 * **********************/

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

