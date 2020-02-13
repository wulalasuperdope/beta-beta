import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="Home-page">
        <h1>Welcome to the Beta Beta</h1>
        <h3>
          Having a problem on sending your project? Check out some beta for the
          same route.
        </h3>
      </div>
    );
  }
}

export default connect(null, null)(Home);
