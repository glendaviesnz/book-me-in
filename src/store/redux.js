import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { persistState } from 'redux-devtools';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';

import { currentUser } from './current-user.reducer';
import Devtools from '../Devtools';

const pingEpic = action$ =>
  action$.ofType('PING')
    .do(() => console.log('pingdingdong'))
    .mapTo({ type: 'PONG' });
export const rootEpic = combineEpics(
  pingEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);
export const reducers = combineReducers({
  currentUser
});

const enhancer = compose(
  applyMiddleware(epicMiddleware),
  Devtools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    enhancer  
  )
  return store;
};

export const store = configureStore();  
