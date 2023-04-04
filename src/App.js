import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My React Blog</h1>
      <div id="body">Welcome to my React Blog!</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/article/:articleID" element={<Article />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;