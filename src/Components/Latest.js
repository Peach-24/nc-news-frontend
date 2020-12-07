import React, { Component } from 'react';
import TitleBanner from './TitleBanner';
import Nav2 from './Nav2';
import * as api from '../api.js';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Title = styled.h1`
  padding-top: 1rem;
`;

class Latest extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchLatestArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    return (
      <div>
        <TitleBanner />
        <div className='storiesHeader'>
          <Title>Latest</Title>
          <Nav2 />
        </div>
        <ArticlesList articles={this.state.articles} />
      </div>
    );
  }
}

export default Latest;
