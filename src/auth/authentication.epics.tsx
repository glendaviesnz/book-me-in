import * as i18next from 'i18next';
import { intersection } from 'lodash';
import { ActionsObservable, ofType } from 'redux-observable';
import { ignoreElements, map, switchMap, tap } from 'rxjs/operators';

import { showUserNotification } from '../notifications/notifications.actions'
import { getDocument } from '../services/database';
import { store } from '../store/redux';
import { removeCurrentUser, setCurrentUser } from '../user/current-user.actions';
import { UserRoles } from '../user/current-user.model';
import { Actions, ActionTypes, CheckUserRoles  } from './authentication.actions';
import { initAuthRedirect } from './authentication.service';

const allowedRoles = ['admin'];

interface User {
    email: string;
    roles: UserRoles[];
}

export const initialiseAuthentication = (action$: ActionsObservable<Actions>) =>
    action$
        .pipe(
            ofType(ActionTypes.InitialiseAuth),
            tap(() => {
                initAuthRedirect();
            }),
            ignoreElements()
        );

export const checkUserRoles = (action$: ActionsObservable<CheckUserRoles>) =>
    action$
        .pipe(
            ofType(ActionTypes.CheckUserRoles),
            switchMap(({ currentUser }: CheckUserRoles) => {
                return getDocument('users', ['email', '==', currentUser.email])
                    .pipe(map((users: User[]) => {
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

function authorisedUser(user: User) {
    return user.roles && intersection(user.roles, allowedRoles).length > 0;
}