// @flow
import * as React from 'react'
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
type Props = {
    name: string,
    photoURL?: string
}
type State = {
    anchorEl: ?HTMLDivElement
}

class UserDetails extends React.Component<Props, State> {
    state = {
        anchorEl: null,
    };

    openMenu = (event: SyntheticEvent<HTMLDivElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    logout = () => {
        this.closeMenu();
        logout();
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <ProfileWrapper className="fadeIn" onClick={this.openMenu}>
                    <div>{this.props.name}</div>
                    <UserPhoto src={this.props.photoURL} />
                </ProfileWrapper>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.closeMenu}
                >
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }

}

export default UserDetails;
