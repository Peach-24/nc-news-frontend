import React from 'react';
import UpvoteDownvote from './UpvoteDownvote';

const CommentsList = (props) => {
  const { comments, commentCount } = props;
  return (
    <div className='comments-section'>
      <hr></hr>

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
