import React, { Component } from 'react';
import * as api from '../api';
// import ClockLoader from 'react-spinners/ClockLoader';

class StoryPreviewBlock extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchPopularArticles().then((stories) => {
      this.setState((currState) => {
        const newState = {
          articles: stories,
          isLoading: false,
        };
        return newState;
      });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h2>Top stories</h2>
        <div className='story-previews'>
          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].author}</p>
            </div>
          </div>

          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{articles[1].title}</h3>
              <p>{articles[1].author}</p>
            </div>
          </div>

          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{articles[2].title}</h3>
              <p>{articles[2].author}</p>
            </div>
          </div>
        </div>

        <hr></hr>
      </div>
    );
  }
}

export default StoryPreviewBlock;
