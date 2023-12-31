import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.components';
import Projects from './components/projects/projects.components';
import Header from './components/header/header.components';
import Skills from './components/skills/skills.components';
import Contact from './components/contact/contact.components';

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import styles
import AOS from 'aos'; // Import AOS library

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when component mounts
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
