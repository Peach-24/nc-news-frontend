import React, { Component } from 'react';
import Nav1 from './Nav1';
import styled from 'styled-components';
import StoryPreviewBlock from './StoryPreviewBlock';

const Title = styled.h1`
  color: darkred;
  font-size: 4rem;
  font-family: 'Courier New', Courier, monospace;
  margin: 40px 0 10px 0;
`;
const DateText = styled.p`
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
`;

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className='homeContainer'>
        <div className='sidebar'>
          <Nav1 />
        </div>
        <div className='homeMain'>
          <Title>Northcoders News</Title>
          <DateText>December 7th</DateText>
          <hr></hr>
          <StoryPreviewBlock />
          <StoryPreviewBlock />
          <StoryPreviewBlock />
        </div>
      </div>
    );
  }
}

export default Home;
