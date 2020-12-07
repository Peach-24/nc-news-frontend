import React, { Component } from 'react';
import * as api from '../api';
import TitleBanner from './TitleBanner';

class Article extends Component {
  state = {
    article_id: 0,
    title: '',
    body: '',
    votes: 0,
    topic: '',
    author: '',
    created_at: '',
    comment_count: '',
  };

  componentDidMount() {
    const { article_id } = this.props;

    api.fetchOneStory(article_id).then((article) => {
      this.setState((currState) => {
        const newState = {
          article_id: article[0].article_id,
          title: article[0].title,
          body: article[0].body,
          votes: article[0].votes,
          topic: article[0].topic,
          author: article[0].author,
          created_at: article[0].created_at,
          comment_count: article[0].comment_count,
        };
        console.log(newState);
        return newState;
      });
    });
  }

  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state;

    console.log(this.state);
    return (
      <div>
        <TitleBanner />
        <div className='story-body'>
          <h1 className='headline'>{title}</h1>
        </div>
        <div className='storyMainImg'></div>
        <div className='story-body'>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default Article;
