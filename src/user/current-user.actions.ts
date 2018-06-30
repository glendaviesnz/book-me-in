import { Action } from 'redux';

import { CurrentUser } from './current-user.model'

export const enum ActionTypes {
  SetCurrentUser = '[Current User] Set current user',
  RemoveCurrentUser = '[Current User] Remove current user',
  Login = '[Current User] login',
}

export const setCurrentUser = (currentUser: CurrentUser) =>
  ({ type: ActionTypes.SetCurrentUser, currentUser });

export const removeCurrentUser = () => ({ type: ActionTypes.RemoveCurrentUser });

export const login = () => ({ type: ActionTypes.Login });

export interface SetCurrentUser extends Action {
  type: ActionTypes.SetCurrentUser;
  currentUser: CurrentUser;
}

export interface RemoveCurrentUser extends Action {
  type: ActionTypes.RemoveCurrentUser;
}

export interface Login extends Action {
  type: ActionTypes.Login;
}

export type Actions = SetCurrentUser | RemoveCurrentUser | Login;