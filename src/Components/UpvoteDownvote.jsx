import React, { Component } from 'react';
import * as api from '../api';

class UpvoteDownvote extends Component {
  state = {
    comment: {},
    hasVoted: false,
  };

  componentDidMount() {
    this.setState({
      comment: this.props.comment,
    });
  }

  handleUpClick = (event) => {
    api.updateCommentVotes(this.state.comment.comment_id, 1).then(() => {
      this.setState((currState) => {
        const newState = {
          comment: { ...currState.comment, votes: currState.comment.votes + 1 },
          hasVoted: true,
        };
        return newState;
      });
    });
  };
  handleDownClick = (event) => {
    api.updateCommentVotes(this.state.comment.comment_id, -1).then(() => {
      this.setState((currState) => {
        const newState = {
          comment: { ...currState.comment, votes: currState.comment.votes - 1 },
          hasVoted: true,
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
        {this.state.hasVoted ? (
          <div>
            <button id='UpvoteBtn' disabled>
              ⬆️
            </button>
            <button id='UpvoteBtn' disabled>
              ⬇️
            </button>
          </div>
        ) : (
          <div>
            <button id='UpvoteBtn' onClick={this.handleUpClick}>
              ⬆️
            </button>
            <button id='UpvoteBtn' onClick={this.handleDownClick}>
              ⬇️
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default UpvoteDownvote;
