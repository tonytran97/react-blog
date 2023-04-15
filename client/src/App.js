import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Collection from './pages/Collection';
import NotFound from './pages/404';
import Login from './pages/Login';
import Create from './pages/Create';

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
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;