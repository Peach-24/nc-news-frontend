import axios from 'axios';
const popularUrl =
  'https://nc-news-api-jp.herokuapp.com/api/articles?sort_by=comment_count';

export const fetchLatestArticles = () => {
  return axios
    .get('https://nc-news-api-jp.herokuapp.com/api/articles/')
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchPopularArticles = () => {
  return axios
    .get(popularUrl)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchOneStory = (articleId) => {
  return axios
    .get(`https://nc-news-api-jp.herokuapp.com/api/articles/${articleId}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchStoryComments = (articleId) => {
  return axios
    .get(
      `https://nc-news-api-jp.herokuapp.com/api/articles/${articleId}/comments?sort_by=votes&limit=30`
    )
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateArticleVotes = (article_id, dir) => {
  return axios
    .patch(`http://nc-news-api-jp.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: dir,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCommentVotes = (comment_id, dir) => {
  return axios
    .patch(`http://nc-news-api-jp.herokuapp.com/api/comments/${comment_id}`, {
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
  return axios
    .post(
      `http://nc-news-api-jp.herokuapp.com/api/articles/${articleId}/comments`,
      { username, body }
    )
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUsers = () => {
  return axios
    .get('https://nc-news-api-jp.herokuapp.com/api/users')
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`http://nc-news-api-jp.herokuapp.com/api/comments/${comment_id}`)
    .catch((err) => {
      console.log(err);
    });
};
