import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import styled from 'styled-components';

import { login as userLogin } from '../store/current-user.actions';
import { ICurrentUser } from '../store/current-user.model';
import { store } from '../store/redux';
import UserDetails from './UserDetails';


const LoginButton = styled(Button)`
  margin-left: auto;
`;

const Wrapper = styled.div`
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
    component = <LoginButton onClick={login}>Login</LoginButton>;
  } else {
    component = <CircularProgress color="secondary" size={40} className="fadeOut" />;
  }
  return <Wrapper>{component}</Wrapper>;
};

export default UserAccount;
