import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticlesList from './Components/articlesList';
import SingleArticle from './Components/singleArticle'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Articles</h1>
      <Routes>
      <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;