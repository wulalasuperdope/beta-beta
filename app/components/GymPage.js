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
    const { id, name, map, routes } = this.props.singleGym;
    if (name && !routes.length) {
      return (
        <div className="single-gym-page">
          <h3 className="gym-name">{name}</h3>
          <img className="gym-map" src={map} />
          <p>This gym doesn't update any route here.</p>
        </div>
      );
    } else {
      return (
        <div className="single-gym-page">
          <h3 className="gym-name">{name}</h3>
          <img className="gym-map" src={map} />
          <ListGroup className="routes-list">
            {routes.map(route => (
              <ListGroup.Item key={route.id}>
                <Link to={`/gyms/${id}/${route.id}`}>
                  Grade: {route.grade}, Color: {route.holdColor}, Wall Location:{' '}
                  {route.wallLocation}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
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
