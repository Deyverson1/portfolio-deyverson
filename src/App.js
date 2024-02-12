import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Projects from './components/Proyectos/Projets';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorProvider } from './components/Header/ColorContext';


function App() { 
  return (
    <Router>
      <ColorProvider>
        <General>
          <Header />
          <Routes>
            <Route path="/" element={<div>
              <Hero />
              <Skills />
              <Projects />
              <AboutMe />
              <Contact />
            </div>} />
            <Route path='/Hero' element={<Hero />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
              <Footer />
        </General>
      </ColorProvider>
    </Router>
  );
}
const General = styled.div`
  background-color: #f5f5f5;
`;
export default App;
