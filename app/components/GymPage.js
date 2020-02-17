import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchGym } from '../redux/thunks/GymThunks';
import RoutePage from './RoutePage';

class GymPage extends React.Component {
  componentDidMount() {
    this.props.fetchGym(this.props.match.params.gymId);
  }
  render() {
    const { id, name, mapUrl, routes } = this.props.singleGym;
    if (name && !routes.length) {
      return (
        <div
          className="single-gym-page"
          style={{ padding: '0.25rem', textAlign: 'center' }}
        >
          <h3 className="gym-name" style={{ padding: '20px' }}>
            {name}
          </h3>
          <div
            className="single-gym-container"
            style={{ display: 'flex', width: '100%' }}
          >
            <div style={{ width: '100%' }}>
              <img
                className="gym-map"
                src={mapUrl}
                style={{ width: '600px', height: '1000px' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <p>Route information is not available.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="single-gym-page"
          style={{ padding: '0.25rem', textAlign: 'center' }}
        >
          <h3 className="gym-name" style={{ padding: '20px' }}>
            {name}
          </h3>
          <div
            className="single-gym-container"
            style={{ display: 'flex', width: '100%' }}
          >
            <div style={{ width: '100%' }}>
              <img
                className="gym-map"
                src={mapUrl}
                style={{ width: '600px', height: '1000px' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <ListGroup className="routes-list">
                {routes.map(route => (
                  <ListGroup.Item key={route.id}>
                    <Link
                      to={`/gyms/${id}/${route.id}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Wall Location: {route.wallLocation}</div>
                      <div>Grade: {route.grade}</div>
                      <div>Color: {route.holdColor}</div>
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapState = ({ singleGym }) => ({ singleGym });

const mapDispatch = dispatch => {
  return {
    fetchGym: gymId => dispatch(fetchGym(gymId))
  };
};

export default connect(mapState, mapDispatch)(GymPage);
