import React, { Component } from 'react';
import styled from 'styled-components';

const NavBtn = styled.button`
  &:hover {
    text-decoration: underline;
  }
  margin: 1rem 1rem 0;
  color: black;
  background-color: transparent;
  border: 0px;
  font-size: 13px;
  font-family: monospace;
`;

class Nav2 extends Component {
  render() {
    return (
      <div>
        <NavBtn onClick={() => console.log('clicked!')}>All</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Coding</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Football</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Cooking</NavBtn>
        <hr></hr>
      </div>
    );
  }
}

export default Nav2;
