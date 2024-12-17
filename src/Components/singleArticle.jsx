import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../axiosConfig'

function SingleArticle() {
  const { article_id } = useParams()
  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .get(`/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
    api
      .get(`/articles/${article_id}/comments`)
        .then((response) => {
          setComments(response.data.comments);
        })
        .catch((err) => {
          setError('Failed to load the comments');
      });
  }, [article_id])

  if (loading) return <p>Loading article...</p>
  if (error) return <p>Error loading article: {error}</p>

  return (
    <div className="single-article">
      {article && (
        <>
      <h2>{article.title}</h2>
      <p><strong>By:</strong> {article.author}</p>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p><strong>Votes:</strong> {article.votes}</p>
      <p>{article.body}</p>

      <h3>Comments:</h3>
          <div className="comments-list">
            {comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.comment_id} className="comment-card">
                  <p><strong>{comment.author}</strong> says:</p>
                  <p>{comment.body}</p>
                </div>
              ))
            )}
          </div>
          </>
        )}
    </div>
  );
}

export default SingleArticle;