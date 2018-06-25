import * as i18next from 'i18next';
import { intersection } from 'lodash';
import { ignoreElements, map, switchMap, tap } from 'rxjs/operators';

import { showUserNotification } from '../notifications/notifications.actions'
import { getDocument } from '../services/database';
import { store } from '../store/redux';
import { removeCurrentUser, setCurrentUser } from '../user/current-user.actions';
import { ICurrentUser, UserRoles } from '../user/current-user.model';
import { GET_USER_ROLES, INITIALISE_AUTHENTICATION } from './authentication.actions';
import { initAuthRedirect } from './authentication.service';

const allowedRoles = ['admin'];

interface IUser {
    email: string;
    roles: UserRoles[];
}

export const initialiseAuthentication = (action$: any) =>
    action$
        .ofType(INITIALISE_AUTHENTICATION)
        .pipe(
            tap(() => {
                initAuthRedirect();
            }),
            ignoreElements()
        );

export const checkUserRoles = (action$: any) =>
    action$
        .ofType(GET_USER_ROLES)
        .pipe(
            switchMap(({ currentUser }: { currentUser: ICurrentUser }) => {
                return getDocument('users', ['email', '==', currentUser.email])
                    .pipe(map((users: IUser[]) => {
                        if (users[0] && authorisedUser(users[0])) {
                            currentUser.roles = users[0].roles;
                            return setCurrentUser(currentUser);
                        } else {
                            store.dispatch(
                                showUserNotification(i18next.t('common:auth.accessDenied'))
                            );
                            return removeCurrentUser();
                        }
                    }));
            })
        );

function authorisedUser(user: IUser) {
    return user.roles && intersection(user.roles, allowedRoles).length > 0;
}