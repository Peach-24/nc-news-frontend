import React, { Component } from 'react';
import styled from 'styled-components';

const NavBtn = styled.button`
  &:hover {
    text-decoration: underline;
  }
  margin: 1rem 2rem 0;
  color: white;
  background-color: transparent;
  border: 0px;
  font-size: 15px;
`;

class Nav2 extends Component {
  render() {
    return (
      <div>
        <NavBtn onClick={() => console.log('clicked!')}>All</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Topic 1</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Topic 2</NavBtn>
        <NavBtn onClick={() => console.log('clicked!')}>Topic 3</NavBtn>
      </div>
    );
  }
}

export default Nav2;
