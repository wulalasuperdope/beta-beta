import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: this.props.videoUrl
    };
  }
  render() {
    const { videoUrl } = this.state;
    return (
      <div>
        <ReactPlayer
          url={videoUrl}
          playing
          light={true}
          controls={true}
          muted={true}
        />
      </div>
    );
  }
}

export default connect(null, null)(App);
