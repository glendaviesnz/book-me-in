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
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    logout = () => {
        this.handleClose();
        logout();
    }
    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <ProfileWrapper className="fadeIn" onClick={this.handleClick}>
                    <div>{this.props.name}</div>
                    <UserPhoto src={this.props.photoURL} />
                </ProfileWrapper>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }

}

export default UserDetails;