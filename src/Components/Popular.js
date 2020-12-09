import React, { Component } from 'react';
import TitleBanner from './TitleBanner';
import Nav2 from './Nav2';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

const override = css`
  margin: 100px auto;
  border-color: block;
`;

const Title = styled.h1`
  padding-top: 1rem;
  color: black;
`;

class Popular extends Component {
  state = {
    all: [],
    coding: [],
    football: [],
    cooking: [],
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
    return (
      <div>
        <TitleBanner />
        <div className='storiesHeader'>
          <Title className='latest-popular'>Popular</Title>
          <Nav2 pageHeader='popular' />
        </div>
        <ArticlesList articles={this.state[this.props.topic]} />;
      </div>
    );
  }
}

export default Popular;
