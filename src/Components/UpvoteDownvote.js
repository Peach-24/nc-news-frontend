import React, { Component } from 'react';
import * as api from '../api';

class UpvoteDownvote extends Component {
  state = {
    comment: {},
    hasUpvoted: false,
    hasDownVoted: false,
  };

  componentDidMount() {
    this.setState({
      comment: this.props.comment,
    });
  }

  handleUpClick = (event) => {
    console.log('voted up!');
    api.updateCommentVotes(this.state.comment.comment_id, 1).then(() => {
      this.setState((currState) => {
        const newState = {
          comment: { ...currState.comment, votes: currState.comment.votes + 1 },
          hasUpvoted: true,
        };
        return newState;
      });
    });
  };
  handleDownClick = (event) => {
    console.log('voted down!');
    api.updateCommentVotes(this.state.comment.comment_id, -1).then(() => {
      this.setState((currState) => {
        const newState = {
          comment: { ...currState.comment, votes: currState.comment.votes - 1 },
          hasDownVoted: true,
        };
        return newState;
      });
    });
  };

  render() {
    const { votes } = this.state.comment;

    return (
      <div>
        <p id='voteCount'>
          <strong>{votes}</strong>
        </p>
        <button
          id='UpvoteBtn'
          onClick={
            !this.state.hasVoted ? this.handleUpClick : this.handleUpClick
          }
        >
          ⬆️
        </button>
        <button id='UpvoteBtn' onClick={this.handleDownClick}>
          ⬇️
        </button>
      </div>
    );
  }
}

export default UpvoteDownvote;
