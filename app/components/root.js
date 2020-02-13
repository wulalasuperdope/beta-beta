import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AllGyms from './AllGyms';

class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gyms">Gyms</Link>
          </nav>
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
