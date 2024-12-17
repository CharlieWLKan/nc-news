import React, { useState, useEffect } from 'react'
import api from '../axiosConfig'
import ArticleCard from './articleCard'

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    api
      .get('/articles')
      .then((response) => {
        setArticles(response.data.articles)
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading articles...</p>
  if (error) return <p>Error loading articles: {error}</p>

  return (
    <div className="articles-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesList