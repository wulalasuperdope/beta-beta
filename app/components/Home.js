import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="Home-page-container" style={{ padding: '1px' }}>
        <img
          src="/img_home.jpg"
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>
    );
  }
}

export default connect(null, null)(Home);
