import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import App from './App';
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
      imageUrl,
      videos,
      gymId
    } = this.props.singleRoute;

    return (
      <div
        className="single-route-page"
        style={{
          padding: '0.25rem',
          textAlign: 'center'
        }}
      >
        <Link to={`/gyms/${gymId}`}>Back</Link>
        <h4 className="route-name" style={{ padding: '20px' }}>
          Grade: {grade}, Color: {holdColor}
        </h4>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <h5>Route</h5>
            <img className="route-image" src={imageUrl} />
          </div>
          <div
            style={{
              width: '100%'
            }}
          >
            <h5>Beta</h5>
            <ListGroup className="videos-list">
              {videos.map(video => (
                <ListGroup.Item key={video.id}>
                  <App videoUrl={video.videoUrl} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
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
