import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Projects from './components/Proyectos/Projets';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import LinearProgres from './components/Linear/Linear';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
const General = styled.div`
  background-color: #f5f5f5;
`
function App() {
  return (
    <General backgroundColor='#000000'>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      <LinearProgres/>
      <Contact/>
      <LinearProgres/>
      <Footer/>
    </General>
  );
}

export default App;
