import React, { Component } from 'react';
import Nav1 from './Nav1';
import styled from 'styled-components';
import StoryPreviewBlock from './StoryPreviewBlock';
import * as api from '../api';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import { Link } from '@reach/router';

const override = css`
  margin: 100px auto;
  border-color: block;
`;

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
  state = {
    articles: [],
    codingArticles: [],
    footballArticles: [],
    cookingArticles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchPopularArticles().then((stories) => {
      const codingStories = stories.filter((story) => story.topic === 'coding');
      const footballStories = stories.filter(
        (story) => story.topic === 'football'
      );
      const cookingStories = stories.filter(
        (story) => story.topic === 'cooking'
      );

      this.setState((currState) => {
        const newState = {
          articles: stories,
          codingArticles: codingStories,
          footballArticles: footballStories,
          cookingArticles: cookingStories,
          isLoading: false,
        };
        return newState;
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ClockLoader
          css={override}
          size={50}
          color={'black'}
          loading={this.state.loading}
        />
      );
    }
    return (
      <div className='homeContainer'>
        <div className='sidebar'>
          <Nav1 />
        </div>
        <div className='homeMain'>
          <Link to='/'>
            <Title>Northcoders News</Title>
          </Link>
          <DateText>December 7th</DateText>
          <hr></hr>
          <StoryPreviewBlock
            articles={this.state.articles}
            header='Top Stories'
          />
          <StoryPreviewBlock
            articles={this.state.codingArticles}
            header='Coding'
          />
          <hr></hr>
          <StoryPreviewBlock
            articles={this.state.footballArticles}
            header='Football'
          />
          <hr></hr>
          <StoryPreviewBlock
            articles={this.state.cookingArticles}
            header='Cooking'
          />
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Home;
