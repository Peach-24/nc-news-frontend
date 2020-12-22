import React, { Component } from 'react';
import * as api from '../api';
import TitleBanner from './TitleBanner';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import CommentsList from '../Components/CommentsList';
import UserLogin from '../Components/UserLogin';
import ArticleVoter from '../Components/ArticleVoter';
import Story from '../Components/Story';
import ErrorMessage from '../Components/ErrorMessage';

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
    isError: false,
    err: null,
  };

  componentDidMount() {
    const { article_id } = this.props;
    const { loggedInUser } = this.props;
    this.setState({ loggedInUser });

    api
      .fetchOneStory(article_id)
      .then((article) => {
        this.setState({
          article_id: article.article_id,
          title: article.title,
          body: article.body,
          topic: article.topic,
          author: article.author,
          created_at: article.created_at,
          comment_count: article.comment_count,
          img_url: article.img_url,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState((currState) => {
          const newState = {
            isLoading: false,
            isError: true,
            err: err.response.data.msg,
          };
          return newState;
        });
      });
  }

  render() {
    const { title, body, topic, author, created_at, img_url } = this.state;
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
      <>
        {!this.state.isError ? (
          <div>
            <TitleBanner />
            <Story
              title={title}
              body={body}
              topic={topic}
              author={author}
              created_at={created_at}
              img_url={img_url}
            />
            <ArticleVoter article_id={this.state.article_id} />
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
        ) : (
          <>
            <TitleBanner />
            <ErrorMessage errorMessage={this.state.err} />
          </>
        )}
      </>
    );
  }
}

export default Article;
