import axios from 'axios';
const url = 'https://nc-news-api-jp.herokuapp.com/api/articles';
const latestUrl =
  'https://nc-news-api-jp.herokuapp.com/api/articles?order_by=created_at';

export const fetchLatestArticles = () => {
  return axios
    .get(latestUrl)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchPopularArticles = () => {
  return axios
    .get(url)
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
