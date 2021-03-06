import React, { Component } from 'react';
import Nav1 from './Nav1';
import styled from 'styled-components';
import StoryPreviewBlock from './StoryPreviewBlock';
import * as api from '../api';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import { Link } from '@reach/router';
import UserLogin from './UserLogin';

const override = css`
  margin: 100px auto;
  border-color: block;
`;

const DateText = styled.p`
  font-size: 1.5rem;
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
`;

class Home extends Component {
  state = {
    all: [],
    coding: [],
    football: [],
    cooking: [],
    isLoading: true,
  };

  componentDidMount() {
    const { loggedInUser } = this.props;
    this.setState({ loggedInUser });

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
    } else {
      return (
        <div className='homeContainer'>
          <div className='sidebar'>
            <Nav1 />
          </div>
          <div className='homeMain'>
            <Link to='/'>
              <h1 className='homepage-title'>Northcoders News</h1>
            </Link>
            <div id='home-date-login-box'>
              <DateText>December 7th</DateText>
              <UserLogin
                loggedInUser={this.props.loggedInUser}
                login={this.props.login}
                logout={this.props.logout}
              />
            </div>
            {/* ----- TOP STORIES BLOCK ---- */}
            {/* <hr></hr> */}
            {/* <StoryPreviewBlock articles={this.state.all} header='Top Stories' /> */}

            <StoryPreviewBlock
              articles={this.state.football}
              header='Football'
            />
            <StoryPreviewBlock articles={this.state.coding} header='Coding' />
            <StoryPreviewBlock articles={this.state.cooking} header='Cooking' />
          </div>
        </div>
      );
    }
  }
}

export default Home;
