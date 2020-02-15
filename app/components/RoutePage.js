import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchRoute } from '../redux/thunks/RouteThunks';

class RoutePage extends React.Component {
  componentDidMount() {
    console.log('calling Route Page componentDidMount');
    this.props.fetchRoute(
      this.props.match.params.gymId,
      this.props.match.params.routeId
    );
  }

  render() {
    console.log('calling Route Page render');
    const {
      grade,
      holdColor,
      wallLocation,
      wallDirection,
      imageUrl,
      videos
    } = this.props.singleRoute;

    return (
      <div className="single-route-page">
        <h3 className="route-name">
          Grade: {grade}, Color: {holdColor}
        </h3>
        <div className="route-location">
          Wall Location: {wallLocation}, Wall Direction: {wallDirection}
        </div>
        <img className="route-image" src={imageUrl} />
        <ListGroup className="videos-list">
          {videos.map(video => (
            <ListGroup.Item key={video.id}>
              <p>{video.name}</p>
              <img src={video.videoUrl} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapState = ({ singleRoute }) => ({ singleRoute });

const mapDispatch = dispatch => {
  return {
    fetchRoute: (gymId, routeId) => dispatch(fetchRoute(gymId, routeId))
  };
};

export default connect(mapState, mapDispatch)(RoutePage);
