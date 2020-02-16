import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="Home-page-container" style={{padding: '1px'}}>
        <h3>Having a problem on sending a climbing route? Check out Beta Beta</h3>
      </div>
    );
  }
}

export default connect(null, null)(Home);
