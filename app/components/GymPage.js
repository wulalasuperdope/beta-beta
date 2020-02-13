import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchGym } from '../redux/thunks/GymThunks';

class GymPage extends React.Component {
  componentDidMount() {
    console.log('calling componentDidMount in GymPage');
    this.props.fetchGym(this.props.match.params.gymId);
  }
  render() {
    console.log('calling Gym Page render');
    console.log(this.props.singleGym);
    const { name, mapUrl, routes } = this.props.singleGym;
    if (name && !routes.length) {
      return (
        <div className="single-gym-page">
          <h3 className="gym-name">{name}</h3>
          <img className="gym-map" src={mapUrl} />
          <p>This gym doesn't update any route here.</p>
        </div>
      );
    } else {
      return (
        <div className="single-gym-page">
          <h3 className="gym-name">{name}</h3>
          <img className="gym-map" src={mapUrl} />
          <ListGroup className="routes-list">
            {routes.map(route => (
              <ListGroup.Item key={route.id}>{route.grade}</ListGroup.Item>
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
