import React, { Component } from 'react';
import * as api from '../api';
import TitleBanner from './TitleBanner';
import * as f from '../functions/functions';
import { Link } from '@reach/router';

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
    comments: [],
    img: '',
    isLoading: true,
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
          img_url: article[0].img_url,
          isLoading: false,
        };
        return newState;
      });
    });
    api.fetchStoryComments(article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const {
      title,
      body,
      topic,
      author,
      created_at,
      comment_count,
      img_url,
      comments,
    } = this.state;

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
        {/* <div className='storyMainImg'> */}
        <img
          src={img_url}
          alt='featured imagery'
          className='storyMainImg'
        ></img>
        {/* </div> */}
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
        <div className='subscribe'>
          <h4>Subscribe to the Northcoders Newsletter</h4>
          <input type='text' placeholder='sign-up@northcoders.co.uk'></input>
        </div>
        <div className='comments-section'>
          <hr></hr>

          <ul className='comments-list'>
            <h3>Comments ({comment_count})</h3>
            {comments.map((comment) => {
              return (
                <li className='comment-card'>
                  <div className='comment-content'>
                    <p>{comment.body}</p>
                    <p>
                      <em>{comment.author}</em>
                    </p>
                  </div>
                  <div className='comment-vote'>
                    <p id='voteCount'>
                      <strong>{comment.votes}</strong>
                    </p>
                    <button id='voteBtn'>⬆️</button>
                    <button id='voteBtn'>⬇️</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Article;
