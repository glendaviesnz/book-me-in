import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import styled from 'styled-components';

import { logout } from '../services/authentication';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

interface IUserDetailsProps {
   name: string;
   photoURL?: string;
}
class UserDetails extends React.Component<IUserDetailsProps, any> {
  public state = {
    anchorEl: undefined
  };

  public openMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public closeMenu = () => {
    this.setState({ anchorEl: undefined });
  };

  public logout = () => {
    this.closeMenu();
    logout();
  };

  public render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <ProfileWrapper className="fadeIn" aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true" onClick={this.openMenu}>
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
