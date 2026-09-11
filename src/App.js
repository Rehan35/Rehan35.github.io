import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import './App.scss';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="research" element={<Research />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
