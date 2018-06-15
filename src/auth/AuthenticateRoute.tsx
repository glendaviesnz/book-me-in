import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { branch, compose, renderComponent} from 'recompose';

const mapStateToProps = (state: any) => {
  return {
      currentUser: state.currentUser
  };
};

const Authenticate = () => <Redirect to="/login" />

const AuthenticateRoute = (isAuthenticated: any) =>
 compose( 
 connect(mapStateToProps),
 branch(
    isAuthenticated,
    renderComponent(Authenticate)
  ))
  
export default AuthenticateRoute(
  ({currentUser}: any) => !currentUser ||  !currentUser.email  || currentUser.loading
)
