import React, { Component } from 'react';
import Main from './modules/components/main';
import Main2 from './modules/components/main2';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Row} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
   state = {
     currentTab: false,
   }
  changingTab(current){

    this.state.currentTab = current;

  }
  render() {
    return (
        <Router>
      <MuiThemeProvider>
          <ul className="nav nav-tabs" style={{}}>
              <li className="nav-item">
                  <a className="nav-link active" ><Link to="/movies">Movies</Link></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" ><Link to="/shows">Shows</Link></a>
              </li>
          </ul>
          <Route exact path="/" component={Main} />
          <Route path="/movies" component={Main} />
          <Route path="/shows" component={Main2} />
      </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
