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
        <div className="single-gym-page" style={{padding:'0.25rem'}}>
          <h3 className="gym-name" >{name}</h3>
          <div style={{display:'flex', 'flex-direction':'column'}}>
            <div>
              <img className="gym-map" src={mapUrl} style={{width:'500px', height:'1000px'}}/>
            </div>
            <div>
              <p>This gym doesn't update any route here.</p>
            </div>
          </div>          
        </div>
      );
    } else {
      return (
        <div className="single-gym-page" style={{padding:'0.25rem'}}>
          <h3 className="gym-name">{name}</h3>
          <img className="gym-map" src={mapUrl} style={{width:'500px', height:'1000px'}} />
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
