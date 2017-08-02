import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationDrawer from './Navigation.js';
import styled from 'styled-components';
import { authenticate } from '../services/authentication';

const LoginButton = styled(Button) `
	margin-left: auto;
`;

class MenuBar extends Component {
    state = {
        navigationOpen: false
    };

    toggleNavigation = () => {
        this.setState({ navigationOpen: !this.state.navigationOpen });
    };
    login = () => {
        authenticate();
    }
    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.toggleNavigation} />
                        </IconButton>
                        <Typography type="title" color="inherit">
                            BookMeIn
                        </Typography>
                        <LoginButton color="contrast" onClick={this.login}>Login</LoginButton>
                    </Toolbar>
                </AppBar>
                <NavigationDrawer open={this.state.navigationOpen} toggle={this.toggleNavigation} />
            </div>
        );
    }
}

export default MenuBar;
