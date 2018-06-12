// import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

// import HideIfNotLoggedIn from '../auth/HideIfNotLoggedIn';
import CurrentUser from '../user/CurrentUser';
import NavigationDrawer from './Navigation';
// const mapStateToProps = (state: any) => {
//   return {
//       currentUser: state.currentUser
//   };
// };

// const MenuBar = ({currentUser}: any) => {

//     return (
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton color="secondary" aria-label="Menu">
//               <MenuIcon  />
//             </IconButton>
//             <Typography color="inherit" variant="title">
//               BookMeIn 
//             </Typography>
//             <CurrentUser />
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   };
 
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

// export default  HideIfNotLoggedIn(MenuBar);
export default  MenuBar;