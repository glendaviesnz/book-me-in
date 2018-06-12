import * as React from 'react';

import { login as userLogin } from '../store/current-user.actions';
import { store } from '../store/redux';

const Login = () => {
    const login = () => {
        store.dispatch(userLogin());
    };
    return <div onClick={login}>Log in with Google</div>;
};

export default Login;
