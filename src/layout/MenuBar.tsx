import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

import CurrentUser from '../user/CurrentUser';
import NavigationDrawer from './Navigation';

 class MenuBar extends React.Component {
  public state = {
    navigationOpen: false
  };

  public toggleNavigation = () => {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  };

  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="secondary" aria-label="Menu">
              <MenuIcon onClick={this.toggleNavigation} />
            </IconButton>
            <Typography color="inherit" variant="title">
              BookMeIn
            </Typography>
            <CurrentUser />
          </Toolbar>
        </AppBar>
        <NavigationDrawer open={this.state.navigationOpen} toggle={this.toggleNavigation} />
      </div>
    );
  }
}

export default  MenuBar;