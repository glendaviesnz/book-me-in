import { ICurrentUser } from '../user';

export const INITIALISE_AUTHENTICATION = 'INITIALISE_AUTHENTICATION';
export const GET_USER_ROLES = 'GET_USER_ROLES';

export function initialiseAuthentication() {
  return { type: INITIALISE_AUTHENTICATION };
}

export function checkUserRoles(currentUser: ICurrentUser ) {
    return { type: GET_USER_ROLES, currentUser };
}
