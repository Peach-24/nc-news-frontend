import React from 'react';
import { Link } from '@reach/router';
import * as f from '../functions/functions';

const Story = (props) => {
  const { title, body, topic, author, created_at, img_url } = props;
  return (
    <>
      <div className='story-head'>
        <p>
          <Link to={`/latest/${topic}`}>{topic}</Link>
        </p>
        <h1 className='headline'>{title}</h1>
        <p>{f.dateFormatter(created_at)}</p>
      </div>
      <img src={img_url} alt='featured imagery' className='storyMainImg'></img>
      <div className='story-body'>
        <div className='byline'>
          <div className='byline-img'></div>
          <h4 className='byline-name'>
            By <em>{author}</em>
          </h4>
        </div>
        <p className='story-text'>{body}</p>
      </div>
    </>
  );
};

export default Story;
