import React, { Component } from 'react';
import Header1 from './Header1';
import Nav1 from './Nav1';

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <Nav1 />
        <Header1 />
        <p>HOME PAGE</p>
      </div>
    );
  }
}

export default Home;
