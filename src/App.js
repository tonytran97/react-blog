import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div id="body">
      <h1>My React Blog</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/article/:articleID" element={<Article />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;