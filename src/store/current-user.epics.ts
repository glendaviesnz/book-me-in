import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';

import { authenticate } from '../services/authentication';
import { LOGIN } from './current-user.actions';

export const loginEpic = (action$: any) =>
  action$
    .ofType(LOGIN)
    .do(() => {
      authenticate();
    })
    .ignoreElements();
