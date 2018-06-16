import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { css } from 'emotion'
import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { branch, compose, renderComponent } from 'recompose';

import { login as userLogin } from '../store/current-user.actions';
import { store } from '../store/redux';
import Loading from '../util/Loading';

const loginCardStyles = css`
  width: 400px;
  text-align: center;
`;

const buttonStyles = css`
    align-items: center;
    justify-content: center;
    height: 150px;
`
const mapStateToProps = (state: any) => {
    return {
        currentUser: state.currentUser,
        loading: state.currentUser.loading
    };
};

const Authenticated = () => <Redirect to="/home" />

const Login = Loading(() => {
    const login = () => {
        store.dispatch(userLogin());
    };

    return (
        <Card className={loginCardStyles}>
            <CardActions className={buttonStyles}>
                <Button onClick={login} size="small" >Login with Google</Button>
            </CardActions>
        </Card>
    );
});

const CheckLoggin = (isAuthenticated: any) =>
    compose(
        connect(mapStateToProps),
        branch(
            isAuthenticated,
            renderComponent(Authenticated)
        ))

export default CheckLoggin(
    ({ currentUser }: any) => currentUser && currentUser.email
)(Login)
