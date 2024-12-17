import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../axiosConfig'

function SingleArticle() {
  const { article_id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .get(`/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article); // Assuming API returns article data as 'article'
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>Error loading article: {error}</p>;

  return (
    <div className="single-article">
      <h1>{article.title}</h1>
      <p><strong>By:</strong> {article.author}</p>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p><strong>Votes:</strong> {article.votes}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default SingleArticle;