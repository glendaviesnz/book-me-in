import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { css } from 'emotion'
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { default as About } from './About';
import './App.css';
import Login from './auth/Login';
import { default as Events } from './events/Events';
import { default as Home } from './Home';
import { default as MenuBar } from './layout/MenuBar';
import theme from './theme';

const appConentStyles = css`
  padding: 30px;
`
class App extends React.Component {
  public componentWillMount() {
    document.title='BookMeIn: Home';
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Typography />
        <CssBaseline />
        <Router>
          <div>
            <div className="App">
              <MenuBar />
            </div>
            <div className={appConentStyles}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact={true} path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/events" component={Events} />
            </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
