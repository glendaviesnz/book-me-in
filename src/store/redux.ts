import { applyMiddleware, combineReducers, compose, createStore,  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
// import { persistState } from 'redux-devtools';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';

import { checkUserRoles, initialiseAuthentication } from '../auth/authentication.epics';
import { notifications } from '../notifications/notifications.reducer';
import { loginEpic } from '../user/current-user.epics';
import { ICurrentUser } from '../user/current-user.model';
import { currentUser } from '../user/current-user.reducer';

export interface IRootState {
  currentUser: ICurrentUser;
}

export const rootEpic = combineEpics(loginEpic, initialiseAuthentication, checkUserRoles);
const epicMiddleware = createEpicMiddleware(rootEpic);
export const reducers = combineReducers({
  currentUser,
  notifications
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
