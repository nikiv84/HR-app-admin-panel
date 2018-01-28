import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import NoMatch from './common/NoMatch';
import Reports from './reports/Reports';
import CreateReport from './reports/CreateReport';

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Switch>
            <Redirect exact from="/" to="/reports" />
            <Route exact path="/reports" component={Reports} />
            <Route path="/create-report" component={CreateReport} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
