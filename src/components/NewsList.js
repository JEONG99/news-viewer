import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';
import './NewsList.scss';

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6bfb082b4ce4464c9ee42d7f1f725019`,
    );
  }, [category]);

  if (loading) {
    return <div className="NewsList">Loading...</div>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className="NewsList">에러 발생!</div>;
  }

  const { articles } = response.data;

  return (
    <div className="NewsList">
      {articles.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </div>
  );
};

export default NewsList;
