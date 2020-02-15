import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AllGyms from './AllGyms';
import Navigation from './Navigation';
import Home from './Home';
import GymPage from './GymPage';
import RoutePage from './RoutePage';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/gyms" component={AllGyms} />
            <Route exact path="/" component={Home} />
            <Route exact path="/gyms/:gymId" component={GymPage} />
            <Route exact path="/gyms/:gymId/:routeId" component={RoutePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => state;

export default connect(mapState, null)(Root);
