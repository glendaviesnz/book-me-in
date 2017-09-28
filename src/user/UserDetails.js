import React from 'react';
import styled from 'styled-components';
import Menu, { MenuItem } from 'material-ui/Menu';

import { logout } from '../services/authentication';

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`
const UserPhoto = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
`

class UserDetails extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };
    openMenu = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleMenuItem = () => {
        this.setState({ open: false });
        logout();
    };
    render() {
        return (
            <ProfileWrapper className="fadeIn" onClick={this.openMenu}>
                <div>{this.props.name}</div>
                <UserPhoto src={this.props.photoURL} />
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleMenuItem}
                >
                    <MenuItem onClick={this.handleMenuItem}>Logout</MenuItem>
                </Menu>
            </ProfileWrapper>

        );
    }

}

export default UserDetails;