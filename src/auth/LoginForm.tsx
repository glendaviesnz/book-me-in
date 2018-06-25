import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { css } from 'emotion'
import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { branch, compose, mapper, renderComponent } from 'recompose';

import { IRootState, store } from '../store/redux';
import { ICurrentUser } from '../user';
import { login as userLogin } from '../user/current-user.actions';
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
interface IProps {
    currentUser: ICurrentUser;
    loading: boolean;
}
const mapStateToProps = (state: IRootState) => {
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

const CheckLoggin = (isAuthenticated: mapper<{}, boolean>) =>
    compose(
        connect(mapStateToProps),
        branch(
            isAuthenticated,
            renderComponent(Authenticated)
        ))

export default CheckLoggin(
    ({ currentUser }: IProps ) => Boolean(currentUser) && Boolean(currentUser.email)
)(Login)
