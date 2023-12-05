import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Header from './components/Header';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Route>
    </Routes>
  )
}

export default App;
