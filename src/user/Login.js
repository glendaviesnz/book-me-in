import React from 'react';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import { authenticate } from '../services/authentication';

const LoginButton = styled(Button)`
	margin-left: auto;
`;

const Login = () => {

    const loggedIn = false;
    const login = () => {
        authenticate();
    }

    return (
        <LoginButton color="contrast" onClick={login}>{(loggedIn) ? 'Logout' : 'Login' }</LoginButton>
    );

}

export default Login;
