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

class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <main>
            <h1>Welcome to the Beta Beta</h1>
            <h3>
              Having a problem on sending your project? Check out some beta for
              the same route.
            </h3>
          </main>
          <Switch>
            <Route exact path="/gyms" component={AllGyms} />
            {/* <Route path="/gyms/:gymId" component={SingleGym} /> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => state;

export default connect(mapState)(Root);
