import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import styled from 'styled-components';

const LoginButton = styled(Button) `
	margin-left: auto;
`;

class MenuBar extends Component {
    state = {
        open: {
            left: false
        },
    };

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({ open: drawerState });
    };
    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);
    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.handleLeftOpen} />
                        </IconButton>
                        <Typography type="title" color="inherit">
                            BookMeIn
          </Typography>
                        <LoginButton color="contrast">Login</LoginButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="left"
                    open={this.state.open.left}
                    onRequestClose={this.handleLeftClose}
                    onClick={this.handleLeftClose}
                >
                    <div>hello</div>
                </Drawer>
            </div>
        );
    }
}

export default MenuBar;
