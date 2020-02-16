import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Gym extends React.Component {
  render() {
    const { name, id, imageUrl } = this.props.gym;
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

export default connect(null, null)(Gym);
