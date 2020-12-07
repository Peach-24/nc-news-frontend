import React, { Component } from 'react';
import * as api from '../api';

class StoryPreviewBlock extends Component {
  state = {
    storyOne: [],
    storyTwo: [],
    storyThree: [],
  };

  componentDidMount() {
    api.fetchPopularArticles().then((articles) => {
      this.setState({
        storyOne: articles[0],
        storyTwo: articles[1],
        storyThree: articles[2],
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Top stories</h2>
        <div className='story-previews'>
          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{this.state.storyOne.title}</h3>
              <p>{this.state.storyOne.author}</p>
            </div>
          </div>

          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{this.state.storyTwo.title}</h3>
              <p>{this.state.storyTwo.author}</p>
            </div>
          </div>

          <div className='home-story'>
            <div className='home-story-img'></div>
            <div className='story-info'>
              <h3>{this.state.storyThree.title}</h3>
              <p>{this.state.storyThree.author}</p>
            </div>
          </div>
        </div>

        <hr></hr>
      </div>
    );
  }
}

export default StoryPreviewBlock;
