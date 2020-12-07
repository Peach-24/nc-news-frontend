import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StoryList = styled.ul`
  width: 60%;
  margin: auto;
`;

const StoryListItem = styled.li`
  list-style-type: none;
  margin: 1rem;
  background-color: whitesmoke;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  padding: 1rem;
  text-align: left;
`;

const ArticlesList = (props) => {
  return (
    <div>
      <StoryList>
        {props.articles.map((article) => {
          return (
            <StoryListItem
              className='storyListPreview'
              key={article.article_id}
            >
              <div className='storyListPreviewImg'></div>
              <div>
                <Link
                  className='articleLink'
                  to={`/articles/${article.article_id}`}
                >
                  <h4>{article.title}</h4>
                </Link>
                <p>{article.author}</p>
              </div>
            </StoryListItem>
          );
        })}
      </StoryList>
    </div>
  );
};

export default ArticlesList;
