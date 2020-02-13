import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Gym extends React.Component {
  render() {
    const { imageUrl, name, id } = this.props.gym;
    return (
      <div className="single-gym">
        <img className="gym-image" src={imageUrl} />
        <div className="gym-name">
          <Link to={`/gyms/${id}`}>{name}</Link>
        </div>
      </div>
    );
  }
}

const mapState = ({ singleGym }) => ({ singleGym });
export default connect(mapState, null)(Gym);
