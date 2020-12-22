import axios from 'axios';

// const testUrl = 'https://test-nc-backend.herokuapp.com/api';
/*  NC Test API returns an object rather than an array for fetchOneStory
 *
 */

// const personalUrl = 'https://nc-news-api-jp.herokuapp.com/api';
// const popularUrl =
//   'https://nc-news-api-jp.herokuapp.com/api/articles?sort_by=comment_count';

const newsApi = axios.create({
  baseURL: 'https://nc-news-api-jp.herokuapp.com/api',
});

export const fetchLatestArticles = () => {
  return newsApi
    .get('/articles')
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const fetchPopularArticles = () => {
  return newsApi
    .get('/articles?sort_by=comment_count')
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const fetchOneStory = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
  // .catch((err) => {
  //   console.log(err.response.data);
  //   return err.response.data;
  // });
};

export const fetchStoryComments = (articleId) => {
  return newsApi
    .get(`/articles/${articleId}/comments?sort_by=votes&limit=30`)
    .then((res) => {
      return res.data.comments;
    });
  // .catch((err) => {
  //   console.log(err.response.data);
  //   return err.response.data;
  // });
};

export const updateArticleVotes = (article_id, dir) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: dir,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCommentVotes = (comment_id, dir) => {
  return newsApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: dir,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (articleId, username, body) => {
  return newsApi
    .post(`/articles/${articleId}/comments`, { username, body })
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUsers = () => {
  return newsApi
    .get('/users')
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};
