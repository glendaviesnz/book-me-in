import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { branch, compose, mapper, renderComponent } from 'recompose';

import { IRootState } from '../store/redux';
import { CurrentUser } from '../user/current-user.model';

interface IProps {
  currentUser: CurrentUser
}

const mapStateToProps = (state: IRootState) => {
  return {
    currentUser: state.currentUser
  };
};

const Authenticate = () => <Redirect to="/login" />

const AuthenticateRoute = (isAuthenticated: mapper<{}, boolean>) =>
  compose(
    connect(mapStateToProps),
    branch(
      isAuthenticated,
      renderComponent(Authenticate)
    ))

export default AuthenticateRoute(
  ({ currentUser }: IProps) => Boolean(!currentUser)
    || Boolean(!currentUser.email)
    || Boolean(currentUser.loading)
)
