import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from 'emotion'
import * as React from 'react';

import { login as userLogin } from '../store/current-user.actions';
import { ICurrentUser } from '../store/current-user.model';
import { store } from '../store/redux';
import UserDetails from './UserDetails';

const loginButtonStyles = css`
  margin-left: auto;
`;

const styles = css`
  margin-left: auto;
`;

const UserAccount = ({ currentUser }: {currentUser: ICurrentUser}) => {
  let component;
  const login = () => {
    store.dispatch(userLogin());
  };
  if (currentUser.name) {
    component = <UserDetails name={currentUser.name} photoURL={currentUser.photoURL} />;
  } else if (!currentUser.loading) {
    component = <Button className={loginButtonStyles} onClick={login}>Login</Button>;
  } else {
    component = <CircularProgress color="secondary" size={40} className="fadeOut" />;
  }
  return <div className={styles}>{component}</div>;
};

export default UserAccount;
