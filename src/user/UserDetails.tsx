import * as React from 'react';
// import styled from 'styled-components';
// import Menu, { MenuItem } from '@material-ui/core/Menu';

// import { logout } from '../services/authentication';

// const ProfileWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const UserPhoto = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-left: 10px;
// `;

class UserDetails extends React.Component {
  public state = {
    // anchorEl
  };

  // openMenu = (event) => {
  //   this.setState({ anchorEl });
  // };

  // closeMenu = () => {
  //   this.setState({ anchorEl });
  // };

  public logout = () => {
    // this.closeMenu();
    // logout();
  };

  public render() {
    // const { anchorEl } = this.state;
    return (
      <div>
        {/* <ProfileWrapper className="fadeIn" onClick={this.openMenu}>
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
        </Menu> */}
      </div>
    );
  }
}

export default UserDetails;
