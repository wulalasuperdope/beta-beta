import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchGyms } from '../redux/thunks/GymThunks';
import Gym from './Gym';

class AllGyms extends React.Component {
  componentDidMount() {
    this.props.fetchGyms();
  }

  render() {
    const { gyms } = this.props;

    return (
      <div className="all-gyms-page">
        <ListGroup className="gym-list">
          {gyms.map(gym => (
            <ListGroup.Item key={gym.id}>
              <Gym key={gym.id} gym={gym} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapState = state => {
  const gyms = state.gyms;
  return { gyms };
};

const mapDispatch = dispatch => {
  return {
    fetchGyms: () => dispatch(fetchGyms())
  };
};

export default connect(mapState, mapDispatch)(AllGyms);
