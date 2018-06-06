import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './Navigation.js';
import CurrentUser from '../user/CurrentUser';

class MenuBar extends React.Component {
  state = {
    navigationOpen: false
  };

  toggleNavigation = () => {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="secondary" aria-label="Menu">
              <MenuIcon onClick={this.toggleNavigation} />
            </IconButton>
            <Typography type="title" color="inherit">
              BookMeIn
            </Typography>
            {/* <CurrentUser /> */}
          </Toolbar>
        </AppBar>
        <NavigationDrawer open={this.state.navigationOpen} toggle={this.toggleNavigation} />
      </div>
    );
  }
}

export default MenuBar;
