import React, { Component } from 'react';

import HomePage from '../../pages/HomePage';
import BigPage from '../../pages/BigPage';
import HugePage from '../../pages/HugePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import './App.scss';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
            <div className="App__menu">
              <Menu
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <Link to="/"><Icon type="minus-circle" />Home</Link>
                </Menu.Item>
                <Menu.Item key="big">
                  <Link to="big"><Icon type="plus-circle" />Big</Link>
                </Menu.Item>
                <Menu.Item key="huge">
                  <Link to="huge"><Icon type="exclamation-circle" />Huge</Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className="App__content">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={HomePage}
                />
                <Route
                  exact
                  path="/big"
                  component={BigPage}
                />
                <Route
                  exact
                  path="/huge"
                  component={HugePage}
                />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
