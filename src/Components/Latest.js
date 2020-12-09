import React, { Component } from 'react';
import TitleBanner from './TitleBanner';
import Nav2 from './Nav2';
import * as api from '../api.js';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

const Title = styled.h1`
  padding-top: 1rem;
`;
const override = css`
  margin: 100px auto;
  border-color: black;
`;

class Latest extends Component {
  state = {
    all: [],
    coding: [],
    football: [],
    cooking: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchLatestArticles().then((stories) => {
      const codingStories = stories.filter((story) => story.topic === 'coding');
      const footballStories = stories.filter(
        (story) => story.topic === 'football'
      );
      const cookingStories = stories.filter(
        (story) => story.topic === 'cooking'
      );

      this.setState((currState) => {
        const newState = {
          all: stories,
          coding: codingStories,
          football: footballStories,
          cooking: cookingStories,
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
    console.log(this.props.topic);
    return (
      <div>
        <TitleBanner />
        <div className='storiesHeader'>
          <Title className='latest-popular'>Latest</Title>
          <Nav2 pageHeader='latest' />
        </div>
        <ArticlesList articles={this.state[this.props.topic]} />;
      </div>
    );
  }
}

export default Latest;
