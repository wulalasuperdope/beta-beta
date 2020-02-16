import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Gym extends React.Component {
  render() {
    const { name, id, imageUrl } = this.props.gym;
    return (
      <Link to={`/gyms/${id}`} className="single-gym">
        <img className="gym-image" src={imageUrl} style={{width: '350px', height:'250px'}}/>
        <p className="gym-name">
         {name}
        </p>
      </Link>
    );
  }
}

export default connect(null, null)(Gym);
