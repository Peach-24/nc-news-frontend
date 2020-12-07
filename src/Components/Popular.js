import React, { Component } from 'react';
import TitleBanner from './TitleBanner';
import Nav2 from './Nav2';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import styled from 'styled-components';

const Title = styled.h1`
  padding-top: 1rem;
  color: black;
`;

class Popular extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchPopularArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    return (
      <div>
        <TitleBanner />
        <div className='storiesHeader'>
          <Title>Popular</Title>
          <Nav2 />
        </div>
        <ArticlesList articles={this.state.articles} />
      </div>
    );
  }
}

export default Popular;
