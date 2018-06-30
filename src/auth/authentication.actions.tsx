import { Action } from 'redux';

import { CurrentUser } from '../user';

export const enum ActionTypes {
  InitialiseAuth = '[Auth] Intialise Authentication',
  CheckUserRoles = '[Auth] Check user roles',
}

export const initialiseAuthentication = () => ({ type: ActionTypes.InitialiseAuth });

export const checkUserRoles = (currentUser: CurrentUser) =>
  ({ type: ActionTypes.CheckUserRoles, currentUser });

interface InitialiseAuth extends Action {
  type: ActionTypes.InitialiseAuth;
}

export interface CheckUserRoles extends Action {
  type: ActionTypes.CheckUserRoles;
  currentUser: CurrentUser;
}

export type Actions = InitialiseAuth| CheckUserRoles;
