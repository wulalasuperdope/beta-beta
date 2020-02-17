import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Gym extends React.Component {
  render() {
    const { name, state, id, imageUrl } = this.props.gym;
    return (
      <div>
      <h4>{state}</h4>
      <Link to={`/gyms/${id}`} className="single-gym">
        <img className="gym-image" src={imageUrl} style={{width: '350px', height:'250px'}}/>
        <p className="gym-name">
         {name}
        </p>
      </Link>
      </div>
    );
  }
}

export default connect(null, null)(Gym);
