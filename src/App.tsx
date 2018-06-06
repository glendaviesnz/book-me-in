
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { default as About } from './About.js';
import './App.css';
import { default as Events } from './events/Events.js';
import { default as Home } from './Home.js';
import { default as MenuBar } from './layout/MenuBar.js';


const theme = createMuiTheme();

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <div className="App">
              <MenuBar />
            </div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/events" component={Events} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
