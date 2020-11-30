import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function NavbarDashboard() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
}