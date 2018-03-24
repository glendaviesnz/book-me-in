import { authenticate } from '../services/authentication';
import { LOGIN } from './current-user.actions';

export const loginEpic = action$ =>
  action$
    .ofType(LOGIN)
    .do(() => {
      authenticate();
    })
    .ignoreElements();
