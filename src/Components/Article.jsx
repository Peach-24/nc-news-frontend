import React, { Component } from 'react';
import * as api from '../api';
import TitleBanner from './TitleBanner';
import * as f from '../functions/functions';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import CommentsList from '../Components/CommentsList';
import UserLogin from '../Components/UserLogin';
import ArticleVoter from '../Components/ArticleVoter';

const override = css`
  margin: 100px auto;
  border-color: black;
`;

class Article extends Component {
  state = {
    article_id: 0,
    title: '',
    body: '',
    topic: '',
    author: '',
    created_at: '',
    img: '',
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    const { loggedInUser } = this.props;
    this.setState({ loggedInUser });

    api.fetchOneStory(article_id).then((article) => {
      this.setState((currState) => {
        const newState = {
          article_id: article[0].article_id,
          title: article[0].title,
          body: article[0].body,
          topic: article[0].topic,
          author: article[0].author,
          created_at: article[0].created_at,
          comment_count: article[0].comment_count,
          img_url: article[0].img_url,
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
    const { title, body, topic, author, created_at, img_url } = this.state;

    return (
      <div>
        <TitleBanner />
        <div className='story-head'>
          <p>
            <Link to={`/latest/${topic}`}>{topic}</Link>
          </p>
          <h1 className='headline'>{title}</h1>
          <p>{f.dateFormatter(created_at)}</p>
        </div>
        <img
          src={img_url}
          alt='featured imagery'
          className='storyMainImg'
        ></img>
        <div className='story-body'>
          <div className='byline'>
            <div className='byline-img'></div>
            <h4 className='byline-name'>
              By <em>{author}</em>
            </h4>
            <br></br>
          </div>
          <hr></hr>
          <p className='story-text'>{body}</p>
        </div>
        <ArticleVoter article_id={this.state.article_id} />
        <hr></hr>
        <UserLogin
          loggedInUser={this.props.loggedInUser}
          login={this.props.login}
          logout={this.props.logout}
        />
        <CommentsList
          article_id={this.state.article_id}
          loggedInUser={this.props.loggedInUser}
        />
      </div>
    );
  }
}

export default Article;
