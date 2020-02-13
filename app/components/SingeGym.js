import React from 'react';
import { connect } from 'react-redux';
import { fetchGym } from '../redux/thunks/GymThunks';

class SingleGym extends React.Component {
  componentDidMount() {
    this.props.fetchGym();
  }
  render() {
    const { name, imageUrl, routes } = this.props.singleGym;

    if (!singleGym.length) {
      return <div>This gym doesn't exist.</div>;
    } else {
      return (
        <div className="single-gym">
          <img className="gym-image" src={imageUrl} />
          <div className="gym-name">{name}</div>
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

export default connect(mapState, mapDispatch)(SingleGym);
