import { combineReducers } from 'redux'
import { toastReducer } from './toastReducer';
import { loaderReducer } from './loaderReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  toast: toastReducer,
  loader: loaderReducer,
  search: searchReducer
});
