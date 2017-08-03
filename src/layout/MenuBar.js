import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationDrawer from './Navigation.js';
import Login from '../user/Login';

class MenuBar extends Component {
    state = {
        navigationOpen: false
    };

    toggleNavigation = () => {
        this.setState({ navigationOpen: !this.state.navigationOpen });
    };

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
                        <Login />
                    </Toolbar>
                </AppBar>
                <NavigationDrawer open={this.state.navigationOpen} toggle={this.toggleNavigation} />
            </div>
        );
    }
}

export default MenuBar;
