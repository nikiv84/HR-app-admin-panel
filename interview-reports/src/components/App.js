import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './common/Header';
import NoMatch from './common/NoMatch';
import Reports from './reports/Reports';
import CreateReport from './reports/CreateReport';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/reports" />
          <Route exact path="/reports" component={Reports} />
          <Route path="/create-report" component={CreateReport} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
