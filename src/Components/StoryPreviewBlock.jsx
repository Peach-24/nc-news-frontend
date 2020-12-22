import React from 'react';
import { Link } from '@reach/router';
import * as f from '../functions/functions';

const StoryPreviewBlock = (props) => {
  return (
    <section>
      <Link to={`/latest/${props.header.toLowerCase()}`}>
        <h2>{props.header}</h2>
      </Link>
      <div className='story-previews'>
        <div className='home-story'>
          <img
            src={props.articles[0].img_url}
            alt='featured imagery'
            className='home-story-img'
          ></img>

          <div className='story-info'>
            <Link to={`/articles/${props.articles[0].article_id}`}>
              <h3>{f.headlineFormatter(props.articles[0].title)}</h3>
            </Link>
            <p>{props.articles[0].author}</p>
          </div>
        </div>

        <div className='home-story'>
          <img
            src={props.articles[1].img_url}
            alt='featured imagery'
            className='home-story-img'
          ></img>

          <div className='story-info'>
            <Link to={`/articles/${props.articles[1].article_id}`}>
              <h3>{f.headlineFormatter(props.articles[1].title)}</h3>
            </Link>
            <p>{props.articles[1].author}</p>
          </div>
        </div>

        <div className='home-story'>
          <img
            src={props.articles[2].img_url}
            alt='featured imagery'
            className='home-story-img'
          ></img>

          <div className='story-info'>
            <Link to={`/articles/${props.articles[2].article_id}`}>
              <h3>{f.headlineFormatter(props.articles[2].title)}</h3>
            </Link>
            <p>{props.articles[2].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPreviewBlock;
