import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Skills from './views/Skills';
import Other from './views/Other';
import Music from './views/Music';
import Styleguide from './views/Styleguide';
import MapEd from './views/MapEd';
import Portfolio from './views/Portfolio';
import Radio from './components/Radio';

function App() {

  return (
    <>
      <div className="overlay"></div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/other" element={<Other />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/music" element={<Music />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/map-ed" element={<MapEd />} />
        </Routes>
      </BrowserRouter>
      {/* <Radio /> */}
    </>
  )
}

export default App
