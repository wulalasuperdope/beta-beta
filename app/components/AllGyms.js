import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchGyms } from '../redux/thunks/GymThunks';

class AllGyms extends React.Component {
  componentDidMount() {
    this.props.fetchGyms();
  }

  render() {
    console.log('calling AllGyms render');
    const { gyms } = this.props;
    console.log(gyms);
    return (
      <div className="gym-page">
        <ListGroup className="gym-list">
          Gyms list
          {/* gyms.map(gym => (
            <ListGroup.Item key={gym.id}>{gym.name}</ListGroup.Item>
          )) */}
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
