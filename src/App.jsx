import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Fun from './pages/Fun';
import Music from './pages/Music';

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
