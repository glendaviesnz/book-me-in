import { applyMiddleware, combineReducers, compose, createStore,  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

import { checkUserRoles, initialiseAuthentication } from '../auth/authentication.epics';
import { INotificationsState, notifications } from '../notifications/notifications.reducer';
import { loginEpic } from '../user/current-user.epics';
import { CurrentUser } from '../user/current-user.model';
import { currentUser } from '../user/current-user.reducer';

export interface IRootState {
  currentUser: CurrentUser;
  notifications: INotificationsState;
}

export const rootEpic = combineEpics(loginEpic, initialiseAuthentication, checkUserRoles);
const epicMiddleware = createEpicMiddleware();
export const reducers = combineReducers({
  currentUser,
  notifications
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware)
);

export function configureStore(initialState = {}) {
  const initialStore = createStore(reducers, initialState, enhancer);
  return initialStore;
}

export const store = configureStore();
epicMiddleware.run(rootEpic);
