import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/routes">Routes</Link>
          </nav>
          <main>
            <h1>Welcome to the Beta Beta</h1>
            <h3>
              Having a problem on sending your project? Check out some beta for
              the same route.
            </h3>
          </main>
          <Switch>
            <Route path="/routes" component={AllRoutes} />
            <Route path="/routes/:routeId" component={SingleRoute} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => state;

export default connect(mapState)(Root);
