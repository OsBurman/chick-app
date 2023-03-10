import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';

export function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];

  const composedEnhancers = compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}