import React from 'react';
import { Link } from 'react-router-dom'

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <img 
        src={article.article_img_url} 
        alt={`Image for ${article.title}`} 
        className="article-image" 
      />
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>
    </div>
  );
}

export default ArticleCard