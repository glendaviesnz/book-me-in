import Button from '@material-ui/core/Button';
import * as React from 'react';
import styled from 'styled-components';
// import UserDetails from './UserDetails';
// import { CircularProgress } from '@material-ui/core/CircularProgress';

import { login as userLogin } from '../store/current-user.actions';
import { store } from '../store/redux';

// import { CurrentUser } from '../store/current-user.model';

const LoginButton = styled(Button)`
  margin-left: auto;
`;

const Wrapper = styled.div`
  margin-left: auto;
`;

const UserAccount = ({ currentUser }: any) => {
  // let component;
  const login = () => {
    store.dispatch(userLogin());
  };
  // if (currentUser.name) {
  //   component = <UserDetails name={currentUser.name} photoURL={currentUser.photoURL} />;
  // } else if (!currentUser.loading) {
  //   component = <LoginButton onClick={login}>Login</LoginButton>;
  // } else {
  //   component = <CircularProgress color="accent" size={40} className="fadeOut" />;
  // }
  return <Wrapper><LoginButton onClick={login}>Login</LoginButton></Wrapper>;
};

export default UserAccount;
