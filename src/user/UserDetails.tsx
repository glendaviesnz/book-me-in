import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { css } from 'emotion'
import * as React from 'react';
import { translate } from 'react-i18next';

import { logout } from '../auth/authentication.service';

const profileStyles = css`
  display: flex;
  align-items: center;
`;
const photoStyles = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

interface IUserDetailsProps {
   name: string;
   photoURL?: string;
   t: any;
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
      <div className={profileStyles} aria-owns={anchorEl ? 'simple-menu' : undefined}
      aria-haspopup="true" onClick={this.openMenu}>
        
          <div className="user-name">{this.props.name}</div>
          <img className={photoStyles} src={this.props.photoURL} />
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={this.logout}>{this.props.t('logout')}</MenuItem>
        </Menu>
      </div>
    );
  }
}
export default translate('common')(UserDetails);

export const UserDetailsUnWrapped = UserDetails;
