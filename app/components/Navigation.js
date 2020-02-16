import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant='dark'>
        <Nav className='nav'>
          <Nav.Link href="/">Beta Beta</Nav.Link>
          <Nav.Link href="/gyms">Gyms</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default connect(null, null)(Navigation);
