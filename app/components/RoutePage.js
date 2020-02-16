import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      imageUrl,
      videos,
      gymId
    } = this.props.singleRoute;

    return (
      <div className="single-route-page">
        <Link to={`/gyms/${gymId}`}>Back</Link>
        <h3 className="route-name">
          Grade: {grade}, Color: {holdColor}, Wall Location: {wallLocation}
        </h3>
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
