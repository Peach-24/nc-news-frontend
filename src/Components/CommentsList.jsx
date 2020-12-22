import React, { Component } from 'react';
import UpvoteDownvote from './UpvoteDownvote';
import * as api from '../api';

class CommentsList extends Component {
  state = {
    comments: [],
    articleId: 0,
    comment_count: 0,
    newComment: '',
    isError: false,
    err: null,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchStoryComments(article_id).then((comments) => {
      this.setState({
        comments: comments,
        articleId: article_id,
        comment_count: comments.length,
      });
    });
  }

  handleDelete = (commentId) => {
    api.deleteComment(commentId).then(() => {
      this.setState((currState) => {
        const newState = {
          comments: currState.comments.filter(
            (comment) => comment.comment_id !== commentId
          ),
          comment_count: currState.comment_count - 1,
        };
        return newState;
      });
    });
  };

  handlePost = (event) => {
    const { article_id, loggedInUser } = this.props;
    if (this.state.newComment.length > 0) {
      api
        .postComment(article_id, loggedInUser, this.state.newComment)
        .then((comment) => {
          this.setState((currState) => {
            const newComments = [...currState.comments];
            newComments.unshift(comment);
            const newState = {
              comments: newComments,
              comment_count: currState.comment_count + 1,
              newComment: '',
            };
            return newState;
          });
        });
    }
  };

  render() {
    const { loggedInUser } = this.props;

    return (
      <div className='comments-section'>
        <div className='postCommentBlock'>
          {loggedInUser ? (
            <div>
              <p>Leave a comment...</p>
              <label id='post-comment'>
                <textarea
                  id='post-comment-textarea'
                  rows='4'
                  style={{ resize: 'none' }}
                  placeholder={`What do you think, ${loggedInUser}?`}
                  value={this.state.newComment}
                  onChange={(event) => {
                    this.setState({ newComment: event.target.value });
                  }}
                  required
                ></textarea>
                <button type='submit' onClick={this.handlePost}>
                  Submit
                </button>
              </label>
            </div>
          ) : (
            <div>
              <h3 id='login-to-post-text'>Login to post comments</h3>
            </div>
          )}
        </div>

        <ul className='comments-list'>
          <h3>Comments ({this.state.comment_count})</h3>
          {this.state.comments.map((comment) => {
            return (
              <li className='comment-card' key={comment.comment_id}>
                <div className='comment-content'>
                  <p>{comment.body}</p>
                  <p>
                    <em>{comment.author}</em>
                  </p>
                  {comment.author === loggedInUser ? (
                    <button
                      className='delete-comment-button'
                      onClick={() => {
                        this.handleDelete(comment.comment_id);
                      }}
                    >
                      <strong>delete ✖️</strong>
                    </button>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className='comment-vote'>
                  <UpvoteDownvote comment={comment} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
