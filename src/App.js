import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as firebase from "firebase";
import { default as Home } from './Home.js';
import { default as About } from './About.js';
import { default as MenuBar } from './layout/MenuBar.js';
import './App.css';
const config = {
  apiKey: "AIzaSyAx8Mm5oVeds_RaNb4qV04dEqZxijYgEeo",
  authDomain: "bookmein-5851f.firebaseapp.com",
  databaseURL: "https://bookmein-5851f.firebaseio.com",
  projectId: "bookmein-5851f",
  storageBucket: "bookmein-5851f.appspot.com",
  messagingSenderId: "153823656972"
};
firebase.initializeApp(config);


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">
          <MenuBar />

          <Router >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
