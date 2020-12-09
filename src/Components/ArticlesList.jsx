import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import * as f from '../functions/functions';

const StoryList = styled.ul``;

const StoryListItem = styled.li`
  list-style-type: none;
  margin: 1rem;
  display: flex;
  padding: 1rem 1rem 1rem 0;
  text-align: left;
`;

const ArticlesList = (props) => {
  return (
    <div>
      <StoryList className='storyList'>
        {props.articles.map((article) => {
          return (
            <StoryListItem
              className='storyListPreview'
              key={article.article_id}
            >
              <img
                src={article.img_url}
                alt='story placeholder'
                className='storyListPreviewImg'
              ></img>

              <div className='article-list-info'>
                <p className='article-info'>{article.author}</p>
                <Link to={`/articles/${article.article_id}`}>
                  <h4 className='listHeadline'>{article.title}</h4>
                </Link>
                <p className='article-info'>
                  {f.dateFormatter(article.created_at)}
                </p>
                <p className='article-info'>
                  Comments: {article.comment_count}
                </p>
              </div>
            </StoryListItem>
          );
        })}
      </StoryList>
    </div>
  );
};

export default ArticlesList;
