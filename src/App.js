import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './articles';
import ArticlePage from './article';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="header" >
          <Link className="header-link" to="/">SHARETRADE.com</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
