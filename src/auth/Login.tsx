import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { branch, compose, renderComponent} from 'recompose';
import { login as userLogin } from '../store/current-user.actions';
import { store } from '../store/redux';

const mapStateToProps = (state: any) => {
    return {
        currentUser: state.currentUser
    };
  };
  
const Authenticated = () => <Redirect to="/home" />

const Login = () => {
    const login = () => {
        store.dispatch(userLogin());
    };
    return <div onClick={login}>Log in with Google</div>;
};

const CheckLoggin = (isAuthenticated: any) =>
 compose( 
 connect(mapStateToProps),
 branch(
    isAuthenticated,
    renderComponent(Authenticated)
  ))
  
export default CheckLoggin(
  ({currentUser}: any) => currentUser && currentUser.email
)(Login)

