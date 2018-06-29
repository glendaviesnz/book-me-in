import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { authenticate } from '../auth/authentication.service';
import { LOGIN } from './current-user.actions';

export const loginEpic = (action$: any) =>
  action$
    .pipe(
      ofType(LOGIN),
      tap(() => {
        authenticate()
      }),
      ignoreElements()
    )
