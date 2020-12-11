import React, { Component } from 'react';
import * as api from '../api';

class ArticleVoter extends Component {
  state = {
    votes: 0,
    hasVoted: false,
    article_id: 0,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchOneStory(article_id).then((arr) => {
      this.setState({ votes: arr[0].votes, article_id });
      console.log(this.state);
    });
  }

  handleUpVote(id) {
    api.updateArticleVotes(id, 1).then(() => {
      this.setState((currState) => {
        const newState = {
          votes: currState.votes + 1,
          hasVoted: true,
        };
        return newState;
      });
    });
  }

  handleDownVote(id) {
    api.updateArticleVotes(id, -1).then(() => {
      this.setState((currState) => {
        const newState = {
          votes: currState.votes - 1,
          hasVoted: true,
        };
        return newState;
      });
    });
  }

  render() {
    return (
      <div className='articleVoteBox'>
        <h4>Like this story?</h4>
        <hr></hr>
        <div className='articleVoteBox-body'>
          {this.state.hasVoted ? (
            <div>
              <p>Current score: {this.state.votes}</p>
            </div>
          ) : (
            <div className='articleVoteBox-body'>
              <span
                className='articleVote-thumbs'
                onClick={() => {
                  this.handleUpVote(this.state.article_id);
                }}
              >
                👍
              </span>
              <p>{this.state.votes}</p>
              <span
                className='articleVote-thumbs'
                onClick={() => {
                  this.handleDownVote(this.state.article_id);
                }}
              >
                👎
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ArticleVoter;
