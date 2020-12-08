import React from 'react';

const StoryPreviewBlock = (props) => {
  console.log(props);

  return (
    <div>
      <h2>{props.header}</h2>
      <div className='story-previews'>
        <div className='home-story'>
          <div className='home-story-img'></div>
          <div className='story-info'>
            <h3>{props.articles[0].title}</h3>
            <p>{props.articles[0].author}</p>
          </div>
        </div>

        <div className='home-story'>
          <div className='home-story-img'></div>
          <div className='story-info'>
            <h3>{props.articles[1].title}</h3>
            <p>{props.articles[1].author}</p>
          </div>
        </div>

        <div className='home-story'>
          <div className='home-story-img'></div>
          <div className='story-info'>
            <h3>{props.articles[2].title}</h3>
            <p>{props.articles[2].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPreviewBlock;
