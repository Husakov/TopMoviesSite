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
          <ul className="nav nav-tabs" style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px'
          }}>
              <li className="nav-item">
                  <a className="nav-link active" ><Link to="/movies">MOVIES</Link></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active" ><Link to="/shows">SHOWS</Link></a>
              </li>
          </ul>
          <div style={{width: '20%',alignItems: 'center', justifyContent: 'center',marginTop: '20px', marginLeft: '40%', marginBottom: '20px',}}>
              <input  className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <Route exact path="/" component={Main} />
          <Route path="/movies" component={Main} />
          <Route path="/shows" component={Main2} />
      </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
