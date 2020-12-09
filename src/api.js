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
      console.log(res.data.article);
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
