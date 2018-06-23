import { intersection } from 'lodash';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import { map, switchMap } from 'rxjs/operators';

import { getDocument } from '../services/database';
import { removeCurrentUser, setCurrentUser } from '../store/current-user.actions';
import { ICurrentUser } from '../store/current-user.model';
import { GET_USER_ROLES, INITIALISE_AUTHENTICATION } from './authentication.actions';
import { initAuthRedirect } from './authentication.service';

const allowedRoles = ['admin'];

export const initialiseAuthentication = (action$: any) =>
    action$
        .ofType(INITIALISE_AUTHENTICATION)
        .do(() => {
            initAuthRedirect();
        })
        .ignoreElements();

export const checkUserRoles = (action$: any) =>
    action$
        .ofType(GET_USER_ROLES)
        .pipe(switchMap(({ currentUser }: { currentUser: ICurrentUser}) => {
                return getDocument('users', ['email', '==', currentUser.email])
                    .pipe(map((users: ICurrentUser) => {
                        if (users[0] && authorisedUser(users[0])) {
                            currentUser.roles = users[0].roles;
                            return setCurrentUser(currentUser);
                        } else {
                            return removeCurrentUser();
                        }
                    }));
            })
        );

function authorisedUser(user: ICurrentUser) {
    return user.roles && intersection(user.roles, allowedRoles).length > 0;
}