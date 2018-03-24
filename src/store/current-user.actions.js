// @flow
import { CurrentUser } from './current-user.model';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const LOGIN = 'LOGIN';

export function setCurrentUser(currentUser: CurrentUser) {
  return { type: SET_CURRENT_USER, currentUser };
}

export function removeCurrentUser() {
  return { type: SET_CURRENT_USER };
}

export function login() {
  return { type: LOGIN };
}
