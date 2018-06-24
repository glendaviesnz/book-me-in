import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { css } from 'emotion';
import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NotFound from './404';
import './App.css';
import AuthenticateRoute from './auth/AuthenticateRoute';
import Login from './auth/Login';
import { default as Home } from './Home';
import Notifications from './notifications/Notifications';

import theme from './theme';

const appShell = css`
  height: 100vh;
  overflow: hidden;
`
const HomeRoute = AuthenticateRoute(() => <Route path="/home" component={Home} />);

class App extends React.Component {
  public componentWillMount() {
    document.title = 'BookMeIn: Home';
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Typography />
        <CssBaseline />
        <div className={appShell}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <HomeRoute />
            <Redirect from="/" exact={true} to="/home" />
            <Redirect from="" exact={true} to="/home" />
            <Route component={NotFound} />
          </Switch>
        </Router>
        </div>
        <Notifications />
      </MuiThemeProvider>
    );
  }
}

export default App;
