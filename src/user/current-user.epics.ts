import { ActionsObservable, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { authenticate } from '../auth/authentication.service';
import { ActionTypes, Login } from './current-user.actions';

export const loginEpic = (action$: ActionsObservable<Login>) =>
  action$
    .pipe(
      ofType(ActionTypes.Login),
      tap(() => {
        authenticate()
      }),
      ignoreElements()
    )
