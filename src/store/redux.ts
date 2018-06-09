import { applyMiddleware, combineReducers, compose, createStore,  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
// import { persistState } from 'redux-devtools';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';

import { loginEpic } from './current-user.epics';
import { currentUser } from './current-user.reducer';

export const rootEpic = combineEpics(loginEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
export const reducers = combineReducers({
  currentUser
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
  // persistState((window.location.href as any).match(/[?&]debug_session=([^&#]+)\b/))
);

export function configureStore(initialState = {}) {
  const initialStore = createStore(reducers, initialState, enhancer);
  return initialStore;
}

export const store = configureStore();
