import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Skills from './views/Skills';
import Fun from './views/Fun';
import Music from './views/Music';
import Styleguide from './views/Styleguide';

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
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
