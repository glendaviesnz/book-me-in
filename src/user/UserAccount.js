import React from 'react';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import UserDetails from './UserDetails';
import { CircularProgress } from 'material-ui/Progress';

import { store } from '../store/redux';
import { login as userLogin } from '../store/current-user.actions';

const LoginButton = styled(Button)`
	margin-left: auto;
`;

const Wrapper = styled.div`
    margin-left: auto;
`

const UserAccount = ({ currentUser }) => {

    let component;
    const login = () => {
        store.dispatch(userLogin());
    }
    if (currentUser.name) {
        component = <UserDetails name={currentUser.name} photoURL={currentUser.photoURL} />;
    } else if (!currentUser.loading){
        component = <LoginButton  onClick={login}>Login</LoginButton>
    } else {
        component = <CircularProgress color="accent" size={40} className="fadeOut" />
    }
    return (
        <Wrapper>
           { component }
        </Wrapper>
    );

}

export default UserAccount;
