import React from 'react';
import UpvoteDownvote from './UpvoteDownvote';
import * as api from '../api';

const CommentsList = (props) => {
  const { article_id, comments, commentCount } = props;

  const handlePost = (event) => {
    api
      .postComment(article_id, props.loggedInUser, 'test')
      .then(console.log('api request made'));
  };

  return (
    <div className='comments-section'>
      <div className='postCommentBlock'>
        {props.loggedInUser ? (
          <div>
            <p>Leave a comment:</p>
            <label id='post-comment'>
              <textarea
                id='post-comment-textarea'
                rows='4'
                style={{ resize: 'none' }}
                placeholder={`What do you think, ${props.loggedInUser}?`}
                required
              ></textarea>
              <button type='submit' onClick={console.log('clicked!')}>
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
        <h3>Comments ({commentCount})</h3>
        {comments.map((comment) => {
          return (
            <li className='comment-card' key={comment.comment_id}>
              <div className='comment-content'>
                <p>{comment.body}</p>
                <p>
                  <em>{comment.author}</em>
                </p>
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
};

export default CommentsList;
